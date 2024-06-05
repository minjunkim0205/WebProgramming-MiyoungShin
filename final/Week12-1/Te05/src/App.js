import './App.css';
import FunctionFruit from './MyComponent/FunctionFruit.js';
import ClassFruit from './MyComponent/ClassFruit.js';

function App() {
  return (
    <div>
      <h1>[ Function ]</h1>
      <FunctionFruit cnt={4} cost={1500}>apple</FunctionFruit>
      <FunctionFruit cnt={3} cost={1000}>banana</FunctionFruit>
      <FunctionFruit cnt={9} cost={2000}>lemon</FunctionFruit>
      <hr/>
      <h1>[ Class ]</h1>
      <ClassFruit cnt={4} cost={1500}>apple</ClassFruit>
      <ClassFruit cnt={3} cost={1000}>banana</ClassFruit>
      <ClassFruit cnt={9} cost={2000}>lemon</ClassFruit>
      <hr/>
    </div>
  );
}

export default App;
