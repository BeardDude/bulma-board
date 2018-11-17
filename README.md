# bulma-board

> Create boards to display lists and also drag and drop items back and forth while maintaing the state of the lists.

![](bulma-board.png)

## Installation

```
npm i bulma-board --save
```

## Props

| name           | type   | required | description                                                                  |
| -------------- | ------ | -------- | ---------------------------------------------------------------------------- |
| numberOfBoards | Number | true     | The number of boards to be displayed                                         |
| boardContent   | Object | true     | Lists to be passed on to the boards are to be represented in key-value pairs |
| options        | Object | true     | Display options, explained in the next section.                              |

## Options

| name                     | type    | required | description                                                                   | exampleValue                        |
| ------------------------ | ------- | -------- | ----------------------------------------------------------------------------- | ----------------------------------- |
| boardColors              | array   | false    | Board's background color, applied to each board in the passed order           | `["#FF9800", "#03A9F4", "#8BC34A"]` |
| innerItemColor           | array   | false    | Inner list item's background color, applied to each board in the passed order | `["#FFE0B2", "#B3E5FC", "#DCEDC8"]` |
| roundedCorners           | boolean | false    | Toggle between rounded corners                                                | true                                |
| innerItemsroundedCorners | boolean | false    | Toggle between rounded corners                                                | true                                |
| showKeyIndex             | boolean | false    | Make the list items as numbered lists                                         | true                                |

## Release History

- 0.1.0
  - Render Boards | Stateful List Items | Drag and Drop List Items

## Author

Raghavendran Ramesh (_BeardDude_)

-ramesh.raghaven@gmail.com

Distributed under the MIT license. See `LICENSE` for more information.

## References

This component has been created only because of the availability of some cool references that are listed below,

1. Polyfills for touch devices - <https://github.com/Bernardo-Castilho/dragdroptouch>
2. Bulma - <https://www.bulma.io>
3. Drag and Drop Implementation - https://github.com/rajeshpillai/youtube-react-components/blob/master/src/AppDragDropDemo.js
