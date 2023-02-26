import { getFeedbackFormSettings, submitFeedback } from "./feedback";

class BackendService {
    getFeedbackFormSettings(): Promise<FeedbackFormSettings> {
        return getFeedbackFormSettings();
    }

    submitFeedback(feedback: Feedback): Promise<void> {
        return submitFeedback(feedback);
    }
}

export const backendService = new BackendService();