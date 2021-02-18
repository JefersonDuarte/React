"use-strict";

import React from "react"
import Title from "./title"

const App = React.createClass({
  render: function () {
    return (
    <div className="container">
      <Title name="Jeferson Duarte" lastname={5} />
      <label htmlFor="input">Input</label>
      <input type="text" name="input"></input>
    </div>
    )
  },
});

export default App
