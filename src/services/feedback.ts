import request from "./request";

export async function getFeedbackFormSettings(): Promise<FeedbackFormSettings> {
    const response = await request.get("/feedback/settings");
    return response.data;
}

export async function submitFeedback(feedback: Feedback): Promise<any> {
    return await request.post("/feedback", feedback);
}
