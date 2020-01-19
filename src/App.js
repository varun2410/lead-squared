import React from 'react';
import './App.css';
import GameComponent from "./component/GameComponent";
import InstructionsComponent from "./component/InstructionsComponent";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="game-background"></div>
        <div className="container game-body">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <div className="game-container">
              <GameComponent />
              <InstructionsComponent />
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App;

