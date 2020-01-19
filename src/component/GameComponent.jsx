import React, { Component } from "react";
import "./css/GameComponent.css"
import { getRandomInt } from "../utils/utils";
import ModalComponent from "./ModalComponent";

class GameComponent extends Component {
  constructor(props) {
    super(props);

    this.onSelect = this.onSelect.bind(this);
    this.getInitState = this.getInitState.bind(this);
    this.startGame = this.startGame.bind(this);
    this.stopGame = this.stopGame.bind(this);

    this.state = this.getInitState();
  }

  getInitState() {
    return {
      correctCircle: null,
      score: '',
      displayModal: false,
    };
  }

  startGame() {
    this.setState({
      correctCircle: getRandomInt(35),
      score: 0,
    }, () => console.log(this.state.correctCircle));
  }

  stopGame() {
    this.setState({
      displayModal: true,
    }, () => {
      setTimeout(() => {
        this.setState({
          correctCircle: null,
          score: '',
          displayModal: false,
        })
      }, 3000)
    });
  }

  onSelect (event) {
    const { correctCircle, score } = this.state;
    const selectedCircle = event.target.value;
    let updatedScore;
    let newCorrectCircle = correctCircle;

    if (parseInt(selectedCircle) === correctCircle) {
      updatedScore = score + 1;
      newCorrectCircle = getRandomInt(35);
      console.log(newCorrectCircle);
    } else {
      updatedScore = score - 1;
    }

    this.setState({
      correctCircle: newCorrectCircle,
      score: updatedScore,
    });
  }

  render() {
    return (
      <div>
        <ModalComponent score={this.state.score} open={this.state.displayModal}/>
        <div className="intro">
          <h1>Hit The Circle</h1>
          <span>Test Your Skill how many circles you can hit</span>
        </div>
        <div className="score-area">
          <span>Score</span>
          <input name="score" value={this.state.score} readOnly/>
        </div>

        <hr />

        <div className="game-layout">
          <div className="game-column">
            {
              [...Array(6)].map((x, i) => (
                <div className="game-row" key={i}>
                  {
                    [...Array(6)].map((y, j) => (
                        <input
                          type="radio"
                          name="radio-game"
                          value={(i*6)+j}
                          key={(i*6)+j}
                          onChange={this.onSelect}
                        />
                    ))
                  }
                </div>
                ))
            }
          </div>
        </div>

        <hr />

        <div className="game-controllers">
          <button className='btn btn-primary controllers-button' onClick={this.startGame}>Play</button>
          <button className='btn btn-primary controllers-button' onClick={this.stopGame}>Stop</button>
        </div>
      </div>
    )
  }
}

export default GameComponent;