import React, { Component } from "react";
import { render } from "react-dom";
import { DragAndDropBoard } from "react-bulma-board";
import "./bulma.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardContent: {
        "To-Do": [
          "Implement item specific actions",
          "Trello clone",
          "Include stateful components"
        ],
        WIP: ["Footer implementation", "write test cases", "optimization"],
        Completed: ["Board", "Drag and Drop", "default Props", "State Handling"]
      },
      options: {
        boardColors: ["#FF9800", "#03A9F4", "#8BC34A"],
        innerItemColor: ["#FFE0B2", "#B3E5FC", "#DCEDC8"],
        roundedCorner: true,
        innerItemsRoundedCorner: true,
        showKeyIndex: true
      }
    };
  }

  handleState(data) {
    this.setState({
      data
    });
  }

  render() {
    const { boardContent, options } = this.state;
    return (
      <DragAndDropBoard
        numberOfBoards={3}
        boardContent={boardContent}
        onDrop={data => this.handleState(data)}
        options={options}
      />
    );
  }
}

render(<App />, document.getElementById("root"));
