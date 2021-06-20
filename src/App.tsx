import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Heading">
          Here you can evaluate or compare Machine Translation Models according to their BLEU Score
        </div>
        <div className="Main">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="Model-Input">
                  Model 1
                </div>
              </div>
              <div className="col-6">
                <div className="Model-Input">
                  Model 2
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
