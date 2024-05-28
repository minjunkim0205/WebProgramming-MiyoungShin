import './App.css';

import ToggleColorFunction from './MyComponent/ToggleColorFunction';
import ToggleColorClass from './MyComponent/ToggleColorClass';

function App() {
  return (
    <div>
      <h1>[ Function ]</h1>
      <ToggleColorFunction/>
      <hr/>
      <h1>[ Class ]</h1>
      <ToggleColorClass/>
      <hr/>
    </div>
  );
}

export default App;
