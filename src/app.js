"use-strict";

import React, {Component} from "react";
import Title from "./title";
import Square from "./square"


class App extends Component {
  render() {
    return (
      <div className="container">
        {["#ccc", "#f00", "#0f0"].map((square) =>(
          <Square key={square} color={square} />
        ))}

      </div>
    );
  }
}


// const App = React.createClass({
//   render: function () {
//     return (
//     <div className="container">
//       <Title name="Jeferson Duarte" lastname={5} />
//       <label htmlFor="input">Input</label>
//       <input type="text" name="input"></input>
//     </div>
//     )
//   },
// });

export default App;
