import { extractFacts, requestChatGptAnswer } from "@/utils/client_side_utils/recordingUtils";
import { ChatCompletionRequestMessage } from "openai";

export const getIntent = async (message: string, chat_context_list?: ChatCompletionRequestMessage[]) => {
    const system_content = '\
    Du bist ein Conversational Assistent für ein Tierarzt dem du hilfst seine Behandlungen zu dokumentieren,\
     Reminder einzustellen, sich alles merken was er dir erzählt damit er bei bedarf danach suchen\
     und sich erinnern kann und eine Anwendung zu Steuern.\
    Mit diesen Prompt sollst du nicht inhaltlich auf die letzte USER Message reagieren sonder nur die Kategorie in JSON format wiedergeben.\
    \
    Ermitteln zu welchen intent die aktuelle conversation gehört:\
    - CAPTURE_REMINDER: erfasse eine Erinnerung an ein Termin oder etwas das zu erledigen ist oder etwas woran man erinnert werden möchte.\
    - CAPTURE_BEHANDLUNG: das ist ein Bericht über eine Behandlung und der Tierarzt möchte das du es strukturiert erfasst und für spätere nachfragen dir merkst.\
    - QUERY_MEMORY: dies ist eine Suchanfrage nach irgendwas, das der Tierarzt dir mal mitgeteilt hat.\
    - CHITCHAT: das ist ein allgemeine conversation die nichts mit den Arbeitsalltag eines Tierarztes zu tun hat.\
    - CONTROL_APPLICATION: dies ist eine anfrage oder Aufforderung die WebApp technisch zu steuern.\
    - UPDATE_REMINDER: das ist eine Anweisung ein oder mehrere Reminder zu ändern, zu löschen oder als erledigt zu markieren.\
    - UPDATE_BEHANDLUNG: das ist eine Anweisung ein bestimmten Teil einer erfassten Behandlung zu ändern oder etwas hinzu zu fügen oder eben löschen.\
    - CONFIRMATION: dies ist eine Bestätigung auf die letzte Frage des ASSISTANT\
    - DENIAL: dies ist eine Verneinung auf die letzte Frage des ASSISTANT\
    \
    Deine Antwort soll immer als JSON formatiert werden und wie folgt aussehen:\
    {"intent": <intent name>}\
    ';

    const user_content = message;
    const gptAnswer = await requestChatGptAnswer( user_content, system_content, chat_context_list, [], "gpt-4", 0.0 )
    try {
        return JSON.parse(JSON.parse(gptAnswer).content);
    } catch(error) {
        throw {error, gptAnswer}
    }
}

