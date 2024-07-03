import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="header">
        <span>Programiz</span>
        <div>
          <button className="feedbackButton">Send feedback</button>
          <button className="adButton">Why this ad?</button>
        </div>
      </div>
      <div className="main">
        <div className="sidebar">
          <i className="fas fa-code icon"></i>
          <i className="fas fa-database icon"></i>
          <i className="fas fa-cog icon"></i>
          <i className="fas fa-file-code icon"></i>
          <i className="fas fa-terminal icon"></i>
          <i className="fas fa-cloud-upload-alt icon"></i>
          <i className="fas fa-laptop-code icon"></i>
          <i className="fas fa-cogs icon"></i>
        </div>
        <div className="editor">
          <div className="tab">main.js</div>
          <div className="codeArea">
            <pre className="code">
              <code>
                {`// Online Javascript Editor for free\n// Write, Edit and Run your Javascript code using JS Online Compiler\n\nconsole.log("Try programiz.pro");`}
              </code>
            </pre>
          </div>
          <button className="runButton">Run</button>
        </div>
        <div className="output">Output</div>
      </div>
    </div>
  );
}

export default App;
