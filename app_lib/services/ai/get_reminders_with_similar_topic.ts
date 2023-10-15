import { requestChatGptAnswer } from "@/utils/client_side_utils/recordingUtils";
import { Candidate } from "@/app_lib/services/fetch_similar_records_service";

export const getSimilarReminders = async (targetText: string, candidates: Candidate[]) => {
    const system_content = '\
    Filter the Reminder-candidates where the topic is almost the same like the TargetTopic.\
    Return only topic number of the resulting elements as a csv.';

    let i = 0
    const user_content = `TargetTopic: "${targetText}" \n Reminder-candidates: ${candidates.map((c) => `${i++}: "${c.text}"`).join(",\n")}`;
    const gptAnswer = await requestChatGptAnswer( user_content, system_content, [], [], "gpt-4", 0.0 )
    const gptContent = JSON.parse(gptAnswer).content;
    //check if the answer contains only comma and numbers
    const regex = /^[0-9,]+$/;
    if (regex.test(gptContent)) {
        const result = gptContent.split(",").map((i: string) => parseInt(i));
        return result.map((i: number) => candidates[i]);
    } else {
        console.log(`error: "getSimilarReminders failed", "${gptContent}"`)
    }

    return [];
}

