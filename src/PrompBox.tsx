import React, { useState } from 'react';

type Answer = {
  text: string;
  nextPrompt?: Prompt;
  feedback?: string;
};

type Prompt = {
  question: string;
  answers: Answer[];
};

type Props = {
    data: Prompt;
    preparingHomePrompt: Prompt;
};
  
export const PromptBox: React.FC<Props> = ({ data, preparingHomePrompt }) => {
  const [currentPrompt, setCurrentPrompt] = useState<Prompt | null>(data);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleAnswerClick = (answer: Answer) => {
    if (answer.feedback) {
      // Display feedback in the popup
      setFeedback(answer.feedback);
    } else if (answer.nextPrompt) {
      // Move to the next prompt
      setCurrentPrompt(answer.nextPrompt);
      setFeedback(null); // Clear feedback
    } else {
      // Handle the case when there's no next prompt but user wants to continue
      setCurrentPrompt(preparingHomePrompt); // Set to the next prompt explicitly
      setFeedback(null); // Clear feedback
    }
  };

  if (!currentPrompt) return null;

  return (
    <div className="prompt-box">
      <p>{currentPrompt.question}</p>
      {currentPrompt.answers.map((answer, index: number) => (
        <button key={index} onClick={() => handleAnswerClick(answer)}>
          {answer.text}
        </button>
      ))}
      {feedback && (
        <div className="feedback-popup">
          <p>{feedback}</p>
          <button onClick={() => {
            setFeedback(null);
            setCurrentPrompt(preparingHomePrompt);
          }}>Continue</button>
        </div>
      )}
    </div>
  );
};
