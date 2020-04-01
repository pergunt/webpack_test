import React, {useState} from 'react'
import {render} from 'react-dom'
import { hot } from 'react-hot-loader/root';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <h1>IVAN</h1>
      {count}
    </div>
  );
}
const HotApp = hot(App);
render(<HotApp />, document.getElementById('root'));