import { ChallengeData } from "@/app/models/ChallengeData";

const calendarUrl = 'https://xjvq5wtiye.execute-api.us-east-1.amazonaws.com/interview/api/v1/challenge';

export const fetchCalendarEvents = async (): Promise<ChallengeData> => {
    const response = await fetch(calendarUrl);
    if (response.status !== 200) {
        throw new Error(`Request failed with status code ${response.status}`);
    }
    const data = await response.json();
    return data;
}