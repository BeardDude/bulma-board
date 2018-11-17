import React, { Component } from "react";
import PropTypes from "prop-types";
import "./PolyfillForTouchDevices";
import "./DragAndDropBoard.css";

class BulmaBoard extends Component {
  onDragStart = (ev, id, board) => {
    console.log("dragstart:", id, " from ", board);
    ev.dataTransfer.setData("id", id);
    ev.dataTransfer.setData("fromBoard", board);
  };

  onDragOver = ev => {
    ev.preventDefault();
    ev.target.style.border = "4px dotted green";
  };

  onDragLeave = ev => {
    ev.preventDefault();
    ev.target.style.border = "";
  };

  onDrop = (ev, toBoard) => {
    ev.target.style.border = "";
    let id = ev.dataTransfer.getData("id");
    let fromBoard = ev.dataTransfer.getData("fromBoard");
    let boardData = this.props.boardContent;

    let filteredList = boardData[fromBoard].filter(task => {
      return task !== id;
    });

    boardData[fromBoard] = filteredList;
    boardData[toBoard].push(id);
    this.props.onDrop(boardData);
  };

  render() {
    const {
      boardColors,
      innerItemColor,
      roundedCorners,
      innerItemsRoundedCorner,
      showKeyIndex
    } = this.props.options;

    let boardStyle = roundedCorners ? "board-rounded" : "board";
    let innerItemStyle = innerItemsRoundedCorner
      ? "innerItem-rounded"
      : "innerItem";

    let boardColor = [],
      innerItem = [];
    if (boardColors === undefined || innerItemColor === undefined) {
      for (let i = 0; i < this.props.numberOfBoards; i++) {
        boardColor[i] = "#fff";
        innerItem[i] = "#fff";
      }
    } else {
      boardColor = boardColors;
      innerItem = innerItemColor;
    }

    let boardData = Object.keys(this.props.boardContent).map((cardName, i) => {
      return (
        <div className="column is-4" key={i}>
          <div
            className={`card ${boardStyle}`}
            style={{ backgroundColor: boardColor[i] }}
          >
            <header className="card-header">
              <p className="card-header-title">{cardName}</p>
              <div className="tags has-addons status">
                <span className="tag">
                  {this.props.boardContent[cardName].length}
                </span>
                <span className="tag" style={{ backgroundColor: innerItem[i] }}>
                  {this.props.boardContent[cardName].length === 0 ||
                  this.props.boardContent[cardName].length === 1 ? (
                    <span>item</span>
                  ) : (
                    <span>items</span>
                  )}
                </span>
              </div>
            </header>
            <div
              className="card-content"
              onDragOver={e => this.onDragOver(e)}
              onDragLeave={e => this.onDragLeave(e)}
              onDrop={e => {
                this.onDrop(e, cardName);
              }}
            >
              <ul>
                {this.props.boardContent[cardName].map((eachInnerItem, j) => {
                  return (
                    <div
                      className={`card draggable ${innerItemStyle}`}
                      key={j}
                      style={{ backgroundColor: innerItem[i] }}
                      draggable
                      onDragStart={e =>
                        this.onDragStart(e, eachInnerItem, cardName)
                      }
                    >
                      <span>
                        {showKeyIndex ? (
                          <p>{j + 1 + ". " + eachInnerItem}</p>
                        ) : (
                          <p>{eachInnerItem}</p>
                        )}
                      </span>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div className="columns is-multiline">{boardData}</div>
      </div>
    );
  }
}

BulmaBoard.propTypes = {
  numberOfBoards: PropTypes.number.isRequired,
  boardContent: PropTypes.object.isRequired,
  onDrop: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired
};

export default BulmaBoard;
