import { Fragment } from "react";
import './App.css';

function App() {
  const content = ['리액트', 'JSX', '컴포넌트', '엘리먼트'];
  const style = {
    backgroundColor : 'yellow', 
    fontSize : '15px', 
    width : '200px', 
    marginLeft : '10px', 
    color : 'blue'
  };
  const content_convert_list_tag = [];
  content.forEach((_element) => {
    content_convert_list_tag.push(<li>{_element}</li>);
  });
  return (
    <Fragment>
      <ul style={style}>
        {content_convert_list_tag}
      </ul>
      {content.indexOf('리액트')!==-1 && <input type='button' value='질문하세요' style={{marginLeft : '10px'}}></input>}
    </Fragment>
  );
}

export default App;
