import './App.css';
import ClassItem from './MyComponent/ClassItem';
import FunctionItem from './MyComponent/FunctionItem';

function App() {
  return (
    <div>
      <h1>[ Function ]</h1>
      <h3>도서 목록을 출력합니다</h3>
      <ul>
        <FunctionItem title={'react 개요'} page={'300페이지'} />
        <FunctionItem title={'프런트 엔드 웹 개발'} page={'250페이지'} />
        <FunctionItem title={'백 엔드 웹 개발'} page={'400페이지'} />
        <FunctionItem title={'풀 스택 개발'} page={'500페이지'} />
      </ul>
      <hr/>
      <h1>[ Class ]</h1>
      <h3>도서 목록을 출력합니다</h3>
      <ul>
        <ClassItem title={'react 개요'} page={'300페이지'} />
        <ClassItem title={'프런트 엔드 웹 개발'} page={'250페이지'} />
        <ClassItem title={'백 엔드 웹 개발'} page={'400페이지'} />
        <ClassItem title={'풀 스택 개발'} page={'500페이지'} />
      </ul>
      <hr/>
    </div>
  );
}

export default App;
