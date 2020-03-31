import 'react-hot-loader'
import { hot } from 'react-hot-loader/root';
import React from 'react'
import {render} from 'react-dom'


function App() {
  return (
    <h1>Hlo</h1>
  );
}
const HotApp = hot(module)(App);
render(<HotApp />, document.body);