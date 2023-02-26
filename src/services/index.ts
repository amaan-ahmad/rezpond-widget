import { getFeedbackFormSettings, submitFeedback } from "./feedback";

export class BackendService {
    public readonly clientId: string;

    constructor(clientId: string) {
        this.clientId = clientId;
        localStorage.setItem("rezpond-client-id", clientId);
    }

    getFeedbackFormSettings(): Promise<FeedbackFormSettings> {
        return getFeedbackFormSettings();
    }

    submitFeedback(feedback: Feedback): Promise<void> {
        return submitFeedback(feedback);
    }
}
