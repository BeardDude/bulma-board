import _classCallCheck from "/Users/prahalramesh/playground/react-components/react-bulma/bulma-board/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/prahalramesh/playground/react-components/react-bulma/bulma-board/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/prahalramesh/playground/react-components/react-bulma/bulma-board/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/prahalramesh/playground/react-components/react-bulma/bulma-board/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/prahalramesh/playground/react-components/react-bulma/bulma-board/node_modules/@babel/runtime/helpers/esm/inherits";
import React, { Component } from "react";
import "./PolyfillForTouchDevices";
import "./DragAndDropBoard.css";

var BulmaBoard =
/*#__PURE__*/
function (_Component) {
  _inherits(BulmaBoard, _Component);

  function BulmaBoard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BulmaBoard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BulmaBoard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onDragStart = function (ev, id, board) {
      console.log("dragstart:", id, " from ", board);
      ev.dataTransfer.setData("id", id);
      ev.dataTransfer.setData("fromBoard", board);
    };

    _this.onDragOver = function (ev) {
      ev.preventDefault();
      ev.target.style.border = "4px dotted green";
    };

    _this.onDragLeave = function (ev) {
      ev.preventDefault();
      ev.target.style.border = "";
    };

    _this.onDrop = function (ev, toBoard) {
      ev.target.style.border = "";
      var id = ev.dataTransfer.getData("id");
      var fromBoard = ev.dataTransfer.getData("fromBoard");
      var boardData = _this.props.boardContent;
      var filteredList = boardData[fromBoard].filter(function (task) {
        return task !== id;
      });
      boardData[fromBoard] = filteredList;
      boardData[toBoard].push(id);

      _this.props.onDrop(boardData);
    };

    return _this;
  }

  _createClass(BulmaBoard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$options = this.props.options,
          boardColors = _this$props$options.boardColors,
          innerItemColor = _this$props$options.innerItemColor,
          roundedCorners = _this$props$options.roundedCorners,
          innerItemsRoundedCorner = _this$props$options.innerItemsRoundedCorner,
          showKeyIndex = _this$props$options.showKeyIndex;
      var boardStyle = roundedCorners ? "board-rounded" : "board";
      var innerItemStyle = innerItemsRoundedCorner ? "innerItem-rounded" : "innerItem";
      var boardColor = [],
          innerItem = [];

      if (boardColors === undefined || innerItemColor === undefined) {
        for (var i = 0; i < this.props.numberOfBoards; i++) {
          boardColor[i] = "#fff";
          innerItem[i] = "#fff";
        }
      } else {
        boardColor = boardColors;
        innerItem = innerItemColor;
      }

      var boardData = Object.keys(this.props.boardContent).map(function (cardName, i) {
        return React.createElement("div", {
          className: "column is-4",
          key: i
        }, React.createElement("div", {
          className: "card ".concat(boardStyle),
          style: {
            backgroundColor: boardColor[i]
          }
        }, React.createElement("header", {
          className: "card-header"
        }, React.createElement("p", {
          className: "card-header-title"
        }, cardName), React.createElement("div", {
          className: "tags has-addons status"
        }, React.createElement("span", {
          className: "tag"
        }, _this2.props.boardContent[cardName].length), React.createElement("span", {
          className: "tag",
          style: {
            backgroundColor: innerItem[i]
          }
        }, _this2.props.boardContent[cardName].length === 0 || _this2.props.boardContent[cardName].length === 1 ? React.createElement("span", null, "item") : React.createElement("span", null, "items")))), React.createElement("div", {
          className: "card-content",
          onDragOver: function onDragOver(e) {
            return _this2.onDragOver(e);
          },
          onDragLeave: function onDragLeave(e) {
            return _this2.onDragLeave(e);
          },
          onDrop: function onDrop(e) {
            _this2.onDrop(e, cardName);
          }
        }, React.createElement("ul", null, _this2.props.boardContent[cardName].map(function (eachInnerItem, j) {
          return React.createElement("div", {
            className: "card draggable ".concat(innerItemStyle),
            key: j,
            style: {
              backgroundColor: innerItem[i]
            },
            draggable: true,
            onDragStart: function onDragStart(e) {
              return _this2.onDragStart(e, eachInnerItem, cardName);
            }
          }, React.createElement("span", null, showKeyIndex ? React.createElement("p", null, j + 1 + ". " + eachInnerItem) : React.createElement("p", null, eachInnerItem)));
        })))));
      });
      return React.createElement("div", null, React.createElement("div", {
        className: "columns is-multiline"
      }, boardData));
    }
  }]);

  return BulmaBoard;
}(Component);

export default BulmaBoard;