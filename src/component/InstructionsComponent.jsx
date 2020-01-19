import React, { Component } from "react";

class InstructionsComponent extends Component {
  render() {
    return (
      <div>
        <span>Instruction : </span>
        <ol>
          <li>Click on the circled as they are selected randomly by the computer</li>
          <li>1 point per hit, minus 1 per miss</li>
        </ol>
      </div>
    );
  }
}

export default InstructionsComponent;