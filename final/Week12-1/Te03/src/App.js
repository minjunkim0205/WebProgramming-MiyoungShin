import { Fragment } from "react";
import './App.css';

import ClassMessage from "./MyComponent/ClassMessage";
import FunctionMessage from "./MyComponent/FunctionMessage";

function App() {
  return (
    <Fragment>
      <h1>[ Function ]</h1>
      <FunctionMessage/>
      <hr/>
      <h1>[ Class ]</h1>
      <ClassMessage/>
      <hr/>
    </Fragment>
  )
}

export default App;