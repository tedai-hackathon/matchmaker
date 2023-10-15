import { DataStore } from '@aws-amplify/datastore';
import { getSimilarReminders } from './ai/get_reminders_with_similar_topic';

export interface Candidate {
  id: string;
  text: string;
}

export const searchSimilarEntries = async <T>(
    modelType: { new (): T },
    idAttribute: string,
    textAttribute: string,
    dateAttribute: string,
    doneAttribute: string,
    targetDay: Date,
    targetText: string,
  ) => {
    const targetDayStart = new Date(targetDay.getFullYear(), targetDay.getMonth(), targetDay.getDate());
    const targetDayEnd = new Date(targetDayStart.getTime() + 24 * 60 * 60 * 1000);
    const models: T[] | undefined = await DataStore.query(modelType as any, (element: any) => element.and( (e: any) => [
        e[dateAttribute].gt(targetDayStart.toISOString()), e[dateAttribute].lt(targetDayEnd.toISOString()), e[doneAttribute].eq(false)])
    );
    console.log("models", models);

    if (!models || models.length === 0) {
        return [];
    }
    // 2. Prepare candidates for similarity search
    const candidates: Candidate[] | undefined = models?.map((model: any) => ({
    id: model[idAttribute] as string,
    text: model[textAttribute] as string,
    }));

    return await getSimilarReminders(targetText, candidates);
};
