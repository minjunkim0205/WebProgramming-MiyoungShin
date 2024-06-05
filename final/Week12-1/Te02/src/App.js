import { Fragment } from "react";
import './App.css';

// 1 | 클래스형
import ExamClassComponent from "./MyComponent/ClassComponent";
// 2 | 함수형
import ExamFunctionComponent from "./MyComponent/FunctionComponent";
function App() {
  return (
    <Fragment>
      <h1>[ Function component ]</h1>
      <ExamFunctionComponent title={"JSX"} content={"작성규칙"} id={"hi"}>안녕하세요</ExamFunctionComponent>
      <ExamFunctionComponent title={"컴포넌트"} content={"함수형과 클래스형"} id={"empty"}/>
      <ExamFunctionComponent content={"props 관리하기"} >자식과 title, id 속성이 없습니다</ExamFunctionComponent>
      <hr></hr>
      <h1>[ Class component ]</h1>
      <ExamClassComponent title={"JSX"} content={"작성규칙"} id={"hi"}>안녕하세요</ExamClassComponent>
      <ExamClassComponent title={"컴포넌트"} content={"함수형과 클래스형"} id={"empty"}/>
      <ExamClassComponent content={"props 관리하기"} >자식과 title, id 속성이 없습니다</ExamClassComponent>
      <hr></hr>
    </Fragment>
  );
}

export default App;
