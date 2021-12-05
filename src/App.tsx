import React from "react";
import FeedbackForm from "./components/feedbackForm";
const App: React.FC<{ clientId: string }> = ({ clientId }) => {
  return (
    <>
      <FeedbackForm clientId={clientId} />
    </>)
}

export default App;