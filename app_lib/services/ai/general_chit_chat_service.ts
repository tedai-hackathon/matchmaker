import { requestChatGptAnswer } from "@/utils/client_side_utils/recordingUtils";
import { ChatCompletionRequestMessage } from "openai";

export const replyGeneralQuestion = async (message: string, chat_context_list: ChatCompletionRequestMessage[]) => {
    const gptRes = await requestChatGptAnswer( message, 
        'Als gute Kollegin reagiere formlos,freundlich, humorvoll, \
        hilfsbereit aber auch kurz gefasst auf nicht arbeits relevante gespräche, wie algemeine fragen,\
         anfragen oder in den Raum geschmissene Bemerkungen.\
         Bitte kein Zeitstempel in der Antwort, nur weil es in den vorangegangenen message enthalten ist.',
        chat_context_list,
        undefined,
        "gpt-4",
        1.0 );

    return JSON.parse(gptRes).content;
}

export const justSaying = async (message: string, chat_context_list: ChatCompletionRequestMessage[]) => {
    const gptRes = await requestChatGptAnswer( message, '',
        chat_context_list,
        undefined,
        "gpt-4",
        1.0 );

    return JSON.parse(gptRes).content;
}