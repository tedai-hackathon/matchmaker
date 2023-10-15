export const answerOperationsQuestion = async (message: string) => {
    // const system_content = '\
    // Du bist eine Tiermedizinische Verwaltungsassistentin.\
    // Ermitle alle relevante Termin details um eine erinnerung einstellen zu können.\
    // Bei relativen Zeitangaben, ermittle die absolute zeit basierend auf das das aktuelle datum & zeit.\
    // Wenn es mehrere Terminangaben sind als JSON Array liefern.\
    // \
    // Antworte im folgenden JSON-Format:\
    // { "termine": [ \
    //     {"thema": <thema>,\
    //      "termin": <ziel datum+zeit in ISOFormat>,\
    //      "details": <wer, was, wo, warum>},\
    // ... ]}\
    // ';

    // const user_content = `${(new Date()).toISOString()}: "${message}"`;

    // return JSON.parse(await requestChatGptAnswer( user_content, system_content ));
    return {"confirmation": "Ja, dafür müsste ich im Archiv nachschauen. Sorry, das hab ich noch nicht drauf. Aber wir arbeiten daran."}
}
