import { LazyReminder } from "@/models";
import { requestChatGptAnswer } from "@/utils/client_side_utils/recordingUtils";
import { ChatCompletionFunctions, ChatCompletionRequestMessage, ChatCompletionResponseMessage } from "openai";

export interface CaptureResult {
    reply: string;
    deliverable?: LazyReminder | null;
}

export const captureReminder = async (  message: string, 
                                        createNewReminderCallBack: (thema: string, termin: Date, details?: string)=>LazyReminder,
                                        chat_context_list?: ChatCompletionRequestMessage[], 
) => {
    const system_content = '\
    Du bist eine Tiermedizinische Verwaltungsassistentin.\
    Benutze die Funktion capture_reminder um alle relevante details pro Reminder Thema zu erfassen.\
    Wenn eine relative Zeitangabe wie "morgen", "heute", "danach", "dann", etc.,  gemacht wird, ermittle die absolute zeit basierend auf das aktuelle datum & zeit oder vorangestellten termin anfragen.\
    Wenn keine konkrete Zeitangabe gemacht wird, frage nach.\
    Benutze nur die Funktion die dir mitegegeben wurde.\
    ';

    const chatFunction: ChatCompletionFunctions = {
        name: "capture_reminder",
        description: "Erstelle Reminder für jeden Termin oder Aufgabe die du identifizieren konntest",
        parameters: {
            type: "object",
            properties: {
                Termine: {
                    description: "Die Termine oder Aufgaben die du identifizieren konntest",
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            thema: {
                                type: "string",
                                description: "Das Thema des Termins oder der Aufgabe. z.B. 'Impfung', 'Futter abholen', 'Rüdiger besuchen' etc.\
                                Leer lassen wenn kein Thema ermittelt werden konnte.",
                            },
                            termin: {
                                type: "string",
                                description: "Das Datum und die Uhrzeit des Termins oder der Aufgabe in ISOFormat und CET. z.B. '2021/09/01T10:00'.\
                                Leer lassen wenn keine Zeitangabe gemacht wurde.",
                            },
                            details: {
                                type: "string",
                                description: "Weitere Details über wer, was, wo, warum oder nebeabreden zum Termin oder der Aufgabe. z.B. 'Impfung für Rüdiger', 'Futter abholen bei Fressnapf', 'Rüdiger besuchen und Medikamente geben' etc.",
                            }
                        },
                        required: ["thema", "termin"],
                    },
                    minItems: 1,
                    maxItems: 10,
                },
            },
            required: ["Termine"],
        },
    }
    
    const user_content = `Jetzt ist ${(new Date()).toISOString()} Uhr. \n Benutzeranfrage: "${message}"`;

    const gptResMsgJson = await requestChatGptAnswer( user_content, system_content, chat_context_list, [chatFunction], "gpt-4", 0.0 )
    const gptResMsg: ChatCompletionResponseMessage = JSON.parse(gptResMsgJson);
    
    let results: CaptureResult[] = [{reply: gptResMsg.content?gptResMsg.content:"", deliverable: null}];

    if( gptResMsg.function_call?.name == "capture_reminder" && gptResMsg.function_call?.arguments) {
        const termine = JSON.parse(gptResMsg.function_call.arguments);
        results = termine.Termine.map((fnArguments: any) => {
            const result: CaptureResult = {reply: gptResMsg.content?gptResMsg.content:"", deliverable: null};

            const thema = fnArguments.thema;
            const termin = new Date(fnArguments.termin);
            if(termin.toString() != "Invalid Date") {
                const details = fnArguments.details;
                    
                result.deliverable = createNewReminderCallBack(thema, termin, details);
                result.reply = "Alles klar, reminder erstellt.";
            } else {
                result.reply = `Wann genau soll der Termin: '${thema}' stattfinden?`;
            }

            return result;
        });

    }

    return results;
}

export const getTermin1 = async (message: string) => {
    const system_content = '\
    Du bist eine Tiermedizinische Verwaltungsassistentin.\
    Ermitle alle relevante Termin details um eine erinnerung einstellen zu können.\
    Bei relativen Zeitangaben, ermittle die absolute zeit basierend auf das das aktuelle datum & zeit.\
    Wenn es mehrere Terminangaben sind als JSON Array liefern.\
    Füge zum Schluss eine sehr kurze Bestätigung für den Arzt (z.B. "Notiert. morgen, medikamente bei rüdiger, und flaschen abholen)\
    Bei Fehlern oder Nachfragen, füge diese als Klärungsrückfrage hinzu.\
    \
    Egal wie die antwort ausfällt, antworte immer in diesen JSON-Format:\
    { "termine": [ \
        {"thema": <thema>,\
         "termin": <ziel datum+zeit in ISOFormat>,\
         "details": <wer, was, wo, warum>},\
    ... ],\
    "confirmation": <Bestätigung>,\
    "clarification": <Klärungs-Rückfrage> }\
    ';

    const user_content = `${(new Date()).toISOString()}: "${message}"`;

    return JSON.parse(await requestChatGptAnswer( user_content, system_content, [], [], "gpt-3.5-turbo", 0.0 ));
}

