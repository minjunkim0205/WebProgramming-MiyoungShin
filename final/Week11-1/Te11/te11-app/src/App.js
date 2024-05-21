import { Fragment } from "react";
import './App.css';
import Timetable from "./MyComponent/Timetable";
import TimeContents from "./MyComponent/TimeContents";

function App() {
  return (
    <Fragment>
      <table border={1}>
        <Timetable />
        <TimeContents />
      </table>
    </Fragment>
  );
}

export default App;
