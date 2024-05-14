import { Fragment } from "react";
import './App.css';

function App() {
  const title = 'first react';
  const style = { backgroundColor: 'gray', fontSize: '30px', color: 'white', width: '200px' };
  return (
    // <div>
    //   <h1 style={style}>{title}</h1>
    //   <h1 style={style}>JSX 예시</h1>
    // </div>
    // <>
    // <h1 style={style}>{title}</h1>
    // <h1 style={style}>JSX 예시</h1>
    // </>
    <Fragment>
    <h1 style={style}>{title}</h1>
    <h1 style={style}>JSX 예시</h1>
    </Fragment>
  );
}

export default App;
