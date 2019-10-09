import React from 'react';
import './App.css';
import ReactComment from './ReactComment';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Wait a second...
        </p>
        <p>
          How did you end up here?
        </p>
        <ReactComment/>
      </header>
    </div>
  );
}

export default App;
