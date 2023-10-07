import React from 'react';
import './App.css';
import { PromptBox } from './PrompBox';
import { initialPrompts, preparingHomePrompt } from './storyData'; 

function App() {
  return (
    <div className="App">
      <PromptBox data={initialPrompts[0]} preparingHomePrompt={preparingHomePrompt} />

    </div>
  );
}

export default App;

