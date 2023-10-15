import { LazyErkannteBehandlungsElemente } from "@/models";
import { requestChatGptAnswer } from "@/utils/client_side_utils/recordingUtils";
import { ChatCompletionFunctions, ChatCompletionRequestMessage, ChatCompletionResponseMessage } from "openai";

export interface CaptureResult {
    reply: string;
    deliverable?: any;
}
export const captureBehandlung = async (  message: string, 
    createNewBehandlungCallBack: (fnArguments: any)=>Promise<LazyErkannteBehandlungsElemente>,
    chat_context_list?: ChatCompletionRequestMessage[], 
) => {
    const system_content = '\
    Du bist ein hilfreicher Tierartzt Helfer (Groß Tiere),\
    der mir nach jeden Kundenbesuch hilft meine Zusammenfassung der geleisteten Arbeit\
    und abgegebenen Medikamente und Materialien strukturiert für die spätere Verbuchung als Tabell zu erfassen.\
    Ermitle alle relevante details zu der Behandlung damit es in das Verwaltungssystem verbucht werden kann.\
    Bei relativen Zeitangaben, ermittle die absolute zeit basierend auf das aktuelle datum & zeit.\
    Benutze nur die Funktion die dir mitegegeben wurde.\
    ';

    const chatFunction: ChatCompletionFunctions = {
        name: "capture_behandlung",
        description: "Erfasse die Dokumentationselemente einer Tiermedizinischen Behandlung",
        parameters: {
            type: "object",
            properties: {
                Kunde: {
                    type: "string",
                    description: "Name des Kunden. Der Kunde ist der Besitzer des Tieres das behandelt wurde.",
                },
                Tiere: {
                    type: "array",
                    description: "Liste der Tiere die behandelt wurden.",
                    items: {
                        type: "object",
                        properties: {
                            Tier: {
                                type: "string",
                                description: "Name oder Kennung des Tieres. z.B. '98 bis 112', 'K17', 'Blümchen', 'Waldi', etc.",
                            },
                            Art: {
                                type: "string",
                                description: "Art des Tieres. z.B. 'Kuh', 'Pferd', 'Schwein', 'Schaf', 'Kalb', 'Stute', 'Stier' etc.",
                            },
                            Gewicht: {
                                type: "number",
                                description: "Gewicht des Tieres in kg. z.B. 20",
                            },
                        },
                        required: ["Tier", "Art"],
                    },
                    minItems: 1,
                    uniqueItems: true,
                },
                Kundenanfrage: {
                    type: "string",
                    description: "Die Kundenanfrage ist die Frage oder das Problem das der Kunde hat. z.B. 'Mein Pferd hat eine Wunde am Bein.'",
                },
                AertztlicherVorbericht: {
                    type: "string",
                    description: "Der Aertztlicher Vorbericht ist die interpretation der Kundenanfrage als Anamnese, vorläufige Diagnose und Behandlung plan. z.B. 'Wunde am Bein. Vermutlich entzündet. Desinfizieren und verbinden.'",
                },
                TerminVereinbarung: {
                    type: "string",
                    description: "Die TerminVereinbarung ist die Uhrzeit und Datum für die Behandlung. z.B. '2021/09/01T10:00'",
                },
                OrtsVereinbarung: {
                    type: "string",
                    description: "Die OrtsVereinbarung ist der Ort für die Behandlung. z.B. 'Hof von Bauer Meier'",
                },
                Todos: {
                    type: "array",
                    description: "Die Todo's sid NotwendigeVorbereitungen als eine liste von Dingen, Vorbereitungen die als Reminder erstellt werden sollen. z.B. 'Brauche Tensol-Wett, muss aber nachbestellte werden. und Mebutil, pipetten und 10 Dexa mitnehmen'",
                    items: {
                        type: "string",
                        description: "Eine Notwendige Vorbereitung. z.B. 'Brauche Tensol-Wett, muss aber nachbestellte werden.'",
                    },
                    minItems: 0,
                    uniqueItems: true,
                },
                Befunde: {
                    type: "array",
                    description: "Die Befunde sind das was bei sichtung der tiere jeweils festgestellt werden konnte. z.B. 'Q98. Gerötete Augen, speichelfluss rechte seite, blutung vorderbein rechts. Kalb 20kg, temperatur 39.5°C, Puls 120, Atmung 30. Keine Lahmheit.'",
                    items: {
                        type: "object",
                        properties: {
                            Tier: {
                                type: "string",
                                description: "Die Tierkennung ist die Kennung des Tieres. z.B. '98 bis 112', 'K17', 'Blümchen', 'Waldi', etc.",
                            },
                            Befund: {
                                type: "string",
                                description: "Ein Befund ist etwas das bei der untersuchung sichtbar oder gemessen festgestellt werden konnte. z.B. 'Gerötete Augen', 'speichelfluss rechte seite', 'blutung vorderbein rechts', 'Keine Lahmheit.', 'Atmung normal', 'Temperatur: 36,7', 'Puls: 120', etc.",
                            },
                        },
                        required: ["Befund"],
                    },
                    minItems: 1,
                    uniqueItems: true,
                },
                Diagnosen: {
                    type: "array",
                    description: "Für jedes Tier aus den Befunden kann es eine Diagnose bezüglich der Ursache, Krankheitsbild und geplante Behandlung.",
                    items: {
                        type: "object",
                        properties: {
                            Tier: {
                                type: "string",
                                description: "Das ist die Kennung oder Name des Tieres. Wenn sich die Diagnose auf eins der Befunde bezieht dann sollte die Tierkennung übereinstimmen. z.B. '98 bis 112', 'K17', 'Blümchen', 'Waldi', etc.",
                            },
                            Diagnose: {
                                type: "string",
                                description: "Die Diagnose pro tier beruht auf die Befunde zum Tier und ist die fachliche schlussfolgerung auf die möglichen krankheitsbilder und geplante Behandlung. z.B. 'Q98. Infektion mit E.coli. Antibiotika und entzündungshemmende Mittel verabreichen.'",
                            },
                        },
                        required: ["Diagnose"],
                    },
                    minItems: 1,
                    uniqueItems: true,
                },
                Behandlungen: {
                    type: "array",
                    description: "Die Behandlungen ist eine Serie von Tiermedizinischen Maßnahmen basierend auf der gestellten diagnose.",
                    items: {
                        type: "string",
                        description: "Die Behandlung ist eine Tiermedizinischen Maßnahme.",
                    },
                    minItems: 1,
                    uniqueItems: true,
                },
                BehandlungsMittel: {
                    type: "array",
                    description: "Dies ist eine liste der Materialien und Medikamenten, die bei den Maßnahmen zum Einsatz gekommen sind. z.B. 'Tensol-Wett', 'Wettrap', 'Pipette', etc.",
                    items: {
                        type: "object",
                        properties: {
                            Name: {
                                type: "string",
                                description: "Das ist der Name oder Beschreibung des eingesetzten Materials oder Medikamentes. z.B. 'Tensol-Wett', 'Wttrap', 'Pipette' etc.",
                            },
                            Menge: {
                                type: "string",
                                description: "Die Menge ist die Menge des Materials. z.B. '1', '2', '3' etc.",
                            },
                            Einheit: {
                                type: "string",
                                description: "Das ist die Einheit der Menge des Materials. z.B. 'Stück', 'Liter', 'Milliliter', 'Packung', 'Gramm' etc.",
                            },
                            NurAbgegeben: {
                                type: "boolean",
                                description: "Dies ist ein flag ob das Material oder Medikament, an den Kunden zur Selbstanwendung, nur abgegeben wurde und nicht direkt verabreicht/verbraucht wurde. z.B. true, false",
                            }
                        },
                        required: ["Material", "Menge", "MengenEinheit", "NurAbgegeben"],                                            
                    },
                    minItems: 0,
                    uniqueItems: true,
                },                    
            },
            required: ['Kunde', 'Tiere', 'Befunde', 'Diagnosen', 'Behandlungen', 'BehandlungsMittel'],
        }
    }

    const user_content = `${(new Date()).toISOString()}: "${message}"`;

    const gptResMsgJson = await requestChatGptAnswer( user_content, system_content, chat_context_list, [chatFunction], "gpt-3.5-turbo", 0.0 )
    const gptResMsg: ChatCompletionResponseMessage = JSON.parse(gptResMsgJson);
    
    const result: CaptureResult = {reply: gptResMsg.content?gptResMsg.content:"", deliverable: null};

    if( gptResMsg.function_call?.name == "capture_behandlung" && gptResMsg.function_call?.arguments) {
        const fnArguments = JSON.parse(gptResMsg.function_call.arguments);
        
        result.deliverable = await createNewBehandlungCallBack(fnArguments);
        result.reply = "Alles klar, Behandlung erfasst.";
    }

    return result;
}

// export const captureBehandlungV2 = async (  message: string, 
//                                         createNewBehandlungCallBack: (vorbericht: object, befunde: object, diagnose: object, behandlung: object)=>LazyBehandlung,
//                                         chat_context_list?: ChatCompletionRequestMessage[], 
// ) => {
//     const system_content = '\
//     Du bist ein hilfreicher Tierartzt Helfer (Groß Tiere),\
//     der mir nach jeden Kundenbesuch hilft meine Zusammenfassung der geleisteten Arbeit\
//     und abgegebenen Medikamente und Materialien strukturiert für die spätere Verbuchung als Tabell zu erfassen.\
//     Ermitle alle relevante details zu der Behandlung damit es in das Verwaltungssystem verbucht werden kann.\
//     Bei relativen Zeitangaben, ermittle die absolute zeit basierend auf das aktuelle datum & zeit.\
//     Benutze nur die Funktion die dir mitegegeben wurde.\
//     ';

//     const chatFunction: ChatCompletionFunctions = {
//         name: "capture_behandlung",
//         description: "Dokumentiere eine Behandlung in strukturierter Form",
//         parameters: {
//             type: "object",
//             properties: {
//                 Vorbericht: {
//                     type: "object",
//                     description: "Der Vorbericht besteht aus der Kundenanfrage, der vorläufigen Anamnese, \
//                                   und den termin details für die Behandlung.",
//                     properties: {
//                         Kundenanfrage: {
//                             type: "string",
//                             description: "Die Kundenanfrage ist die Frage oder das Problem das der Kunde hat. z.B. 'Mein Pferd hat eine Wunde am Bein.'",
//                         },
//                         AertztlicherVorbericht: {
//                             type: "string",
//                             description: "Der Aertztlicher Vorbericht ist die interpretation der Kundenanfrage als Anamnese, vorläufige Diagnose und Behandlung plan. z.B. 'Wunde am Bein. Vermutlich entzündet. Desinfizieren und verbinden.'",
//                         },
//                         TerminVereinbarung: {
//                             type: "string",
//                             description: "Die TerminVereinbarung ist die Uhrzeit und Datum für die Behandlung. z.B. '2021/09/01T10:00'",
//                         },
//                         OrtsVereinbarung: {
//                             type: "string",
//                             description: "Die OrtsVereinbarung ist der Ort für die Behandlung. z.B. 'Hof von Bauer Meier'",
//                         },
//                         KundenName: {
//                             type: "string",
//                             description: "Der Name des Kunden. z.B. 'Bauer Meier'",
//                         },
//                         NotwendigeVorbereitungen: {
//                             type: "array",
//                             description: "Die NotwendigeVorbereitungen ist eine pipe-separierte liste von Dingen,\
//                                          die vor der Behandlung zu erledigen sind und man beim Termin dabei haben\
//                                         muss aus denen Reminder erstellt werden sollen. \
//                                         z.B. ['Brauche Tensol-Wett, muss aber nachbestellte werden.'| 'Mebutil, pipetten und 10 Dexa mitnehmen'|...]",
//                             items: {
//                                 type: "string",
//                                 description: "Eine Notwendige Vorbereitung. z.B. 'Brauche Tensol-Wett, muss aber nachbestellte werden.'",
//                             },
//                             minItems: 0,
//                             uniqueItems: true,
//                         },
//                     },
//                     required: ["KundenName", "Kundenanfrage", "AertztlicherVorbericht", "TerminVereinbarung"],
//                 },
//                 Befunde: {
//                     type: "array",
//                     description: "Die Befunde sind das was bei sichtung der tiere jeweils festgestellt werden konnte.\
//                      z.B. 'Q98. Gerötete Augen, speichelfluss rechte seite, blutung vorderbein rechts. Kalb 20kg, temperatur 39.5°C, Puls 120, Atmung 30. Keine Lahmheit.'",
//                      items: {
//                         type: "object",
//                         properties: {
//                             BefundId: {
//                                 type: "number",
//                                 description: "Die BefundId ist eine eindeutige Nummer für den Befund. z.B. 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 etc.",
//                             },
//                             TierArt: {
//                                 type: "string",
//                                 description: "Die TierArt ist die Art des Tieres. z.B. 'Kuh', 'Pferd', 'Schwein', 'Schaf', 'Kalb', 'Stute', 'Stier' etc.",
//                             },
//                             TierNameOderKennung: {
//                                 type: "string",
//                                 description: "Der TierNameOderKennung ist der Name oder die Kennung des Tieres. z.B. 'Rüdiger', 'Kuh 123', 'Pferd 456', 'Schwein 789', 'Schaf 012', 'Kalb 345', 'Stute 678', 'Stier 901' etc.",
//                             },
//                             TierGewicht: {
//                                 type: "number",
//                                 description: "Das TierGewicht ist das Gewicht des Tieres in kg. z.B. 20"
//                             },
//                             Temperatur: {
//                                 type: "number",
//                                 description: "Die Temperatur ist die Körpertemperatur des Tieres in °C. z.B. 39.5"
//                             },
//                             Puls: {
//                                 type: "number ",
//                                 description: "Der Puls ist die Herzfrequenz des Tieres in Schläge pro Minute. z.B. 120"
//                             },
//                             Atmung: {
//                                 type: "string",
//                                 description: "Die Atmung ist die Atemfrequenz des Tieres in Atemzüge pro Minute z.B. 30. Oder eine qualitative aussage wie 'Normal','Flach' etc."
//                             },
//                             Befund: {
//                                 type: "string",
//                                 description: "Der Befund ist die zusammenfassung der Befunde. z.B. 'Q98. Gerötete Augen, speichelfluss rechte seite, blutung vorderbein rechts. Keine Lahmheit.'"
//                             }
//                         },
//                         required: ["TierArt", "TierNameOderKennung", "Befund"],
//                     },
//                     minItems: 1,
//                     uniqueItems: true,
//                 },
//                 Diagnose: {
//                     type: "array",
//                     description: "Für jedes Tier aus den Befunden kann es eine Diagnose bezüglich der Ursache, Krankheitsbild und geplante Behandlung.",
//                     items: {
//                         type: "object",
//                         properties: {
//                             DiagnoseId: {
//                                 type: "number",
//                                 description: "Die DiagnoseId ist eine eindeutige Nummer für die Diagnose. z.B. 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 etc.",
//                             },
//                             BefundId: {
//                                 type: "number",
//                                 description: "Die BefundId ist die Nummer des Befundes auf dem sich die Diagnose bezieht. z.B. 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 etc.",
//                             },
//                             Diagnose: {
//                                 type: "string",
//                                 description: "Die Diagnose pro tier beruht auf die Befunde zum Tier und ist die fachliche schlussfolgerung auf die möglichen krankheitsbilder und geplante Behandlung.\
//                                 z.B. 'Q98. Infektion mit E.coli. Antibiotika und entzündungshemmende Mittel verabreichen.'",
//                             },
//                         },
//                         required: ["BefundId", "Diagnose"],
//                     },
//                     minItems: 1,
//                     uniqueItems: true,
//                 },
//                 Behandlung: {
//                     type: "array",
//                     description: "Für jede Diagnose Die Behandlung sind die ausgeführte therapeutische maßnahmen basierend auf der gestellten diagnose.\
//                      Inklusive der verbrauchten Materialien, verabreichten Medikamente oder abgegebenen Medikamente und Materialien mit Mengenangaben.",
//                     items: {
//                         type: "object",
//                         properties: {
//                             DiagnoseId: {
//                                 type: "number",
//                                 description: "Die DiagnoseId ist die Nummer der Diagnose auf dem sich die Behandlung bezieht. z.B. 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 etc.",
//                             },
//                             Maßnahme: {
//                                 type: "array",
//                                 description: "Es sind mehrere Maßnahmen für die behandlung einer diagnose nötig, bei denen Medikamente verabreicht und material verbraucht wird.",
//                                 items: {
//                                     type: "object",
//                                     properties: {
//                                         MaßnahmeId: {
//                                             type: "number",
//                                             description: "Die MaßnahmeId ist eine eindeutige Nummer für die Maßnahme. z.B. 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 etc.",
//                                         },
//                                         Maßnahme: {
//                                             type: "string",
//                                             description: "Die Maßnahme ist die beschreibung der Maßnahme. z.B. 'Antibiotika verabreichen', 'Wunde desinfizieren und verbinden', 'Medikamente abgeben' etc.",
//                                         },
//                                         MaterialienUndMedikamente: {
//                                             type: "array",
//                                             description: "Dies ist eine liste der Materialien und Medikamente die bei der Maßnahme zum Einsatz gekommen sind. z.B. ['Tensol-Wett'| 'Wettrap'| 'Pipette'...]",
//                                             items: {
//                                                 type: "object",
//                                                 properties: {
//                                                     MaterialOderMedikament: {
//                                                         type: "string",
//                                                         description: "Das ist der Name oder Beschreibung des eingesetzten Materials oder Medikamentes. z.B. 'Tensol-Wett', 'Wttrap', 'Pipette' etc.",
//                                                     },
//                                                     Menge: {
//                                                         type: "string",
//                                                         description: "Die Menge ist die Menge des Materials. z.B. '1', '2', '3' etc.",
//                                                     },
//                                                     MengenEinheit: {
//                                                         type: "string",
//                                                         description: "Die MengenEinheit ist die Einheit der Menge des Materials. z.B. 'Stück', 'Liter', 'Milliliter', 'Packung', 'Gramm' etc.",
//                                                     },
//                                                     NurAbgegeben: {
//                                                         type: "boolean",
//                                                         description: "Dies ist ein flag ob das Material oder Medikament, an den Kunden zur Selbstanwendung, nur abgegeben wurde und nicht direkt verabreicht/verbraucht wurde. z.B. true, false",
//                                                     }
//                                                 },
//                                                 required: ["Material", "Menge", "MengenEinheit", "NurAbgegeben"],                                            
//                                             },
//                                             minItems: 0,
//                                             uniqueItems: true,
//                                         },
//                                     },
//                                     required: ["Maßnahme", "MaterialienUndMedikamente"],
//                                 },
//                                 minItems: 1,
//                                 uniqueItems: true,
//                             }
//                         },
//                         required: ["DiagnoseId", "Maßnahme"],
//                     },
//                     minItems: 1,
//                     uniqueItems: true,
//                 }
//             },
//             required: ["Vorbericht", "Befunde", "Diagnose", "Behandlung"],
//         }
//     }
    
//     const user_content = `${(new Date()).toISOString()}: "${message}"`;

//     const gptResMsgJson = await requestChatGptAnswer( user_content, system_content, chat_context_list, [chatFunction], "gpt-3.5-turbo", 0.0 )
//     const gptResMsg: ChatCompletionResponseMessage = JSON.parse(gptResMsgJson);
    
//     const result: CaptureResult = {reply: gptResMsg.content?gptResMsg.content:"", deliverable: null};

//     if( gptResMsg.function_call?.name == "capture_behandlung" && gptResMsg.function_call?.arguments) {
//         const fnArguments = JSON.parse(gptResMsg.function_call.arguments);
//         const vorbericht = JSON.parse(fnArguments.Vorbericht);
//         const befunde = JSON.parse(fnArguments.Befunde);
//         const diagnose = JSON.parse(fnArguments.Diagnose);
//         const behandlung = JSON.parse(fnArguments.Behandlung);
        
//         result.deliverable = createNewBehandlungCallBack(vorbericht, befunde, diagnose, behandlung);
//         result.reply = "Alles klar, Behandlung erfasst.";
//     }

//     return result;
// }


import { extractFacts } from "@/utils/client_side_utils/recordingUtils";

export const getBehandlungsEntities = async (message: string) => {
    return JSON.parse(await extractFacts(message));
}
