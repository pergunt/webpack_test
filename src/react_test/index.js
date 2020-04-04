import React, {useState, useRef, Fragment} from 'react'
import {render} from 'react-dom'
import { hot } from 'react-hot-loader/root';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition'

import {Motion, spring, presets} from 'react-motion'
import '../styles/style.css'

import _ from 'lodash';
console.log(_);

const defaultStyle = {
  maxHeight: 0
};

import(
  /* webpackPrefetch: 3 */
  /* webpackChunkName: "first_prefetch" */
  './first_prefetch'
  );
import(
  /* webpackPrefetch: 4 */
  /* webpackChunkName: "second_prefetch" */
  './second_prefetch'
  );

const Counter = () => {
  const [count, setCount] = useState(0);
  const [style, setStyle] = useState(defaultStyle);
  const textContainerRef = useRef();

  const onBtnClick = () => {
    setCount(count + 1);
    const height = textContainerRef.current.scrollHeight;
    setStyle({
      maxHeight: !style.maxHeight.val || style.maxHeight.val < height ? spring(height)
        : spring(0, presets.stiff)
    });
  };
  return (
    <Fragment>
      <button onClick={onBtnClick}>Click me</button>
      <Motion defaultStyle={defaultStyle} style={style}>
        {interpolatingStyle => (
          <aside ref={textContainerRef} style={{...interpolatingStyle, overflow: 'hidden'}}>
            <h1>IVAN is here</h1>
            <h1>IVAN is here</h1>
            <h1>IVAN is here</h1>
            <h1>IVAN is here</h1>
            <h1>IVAN is here</h1>
            <h1>IVAN is here</h1>
            <h1>IVAN is here</h1>
            <h1>IVAN is here</h1>
            <h1>IVAN is here</h1>
          </aside>
        )}
      </Motion>
      {count}
    </Fragment>
  )
};
const RouteComponent = ({text}) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Link to='/home' style={{marginRight: 20}}>Home</Link>
      <Link to='/about' style={{marginRight: 20}}>About</Link>
      <Link to='/counter'>Counter</Link>
      <AnimatedSwitch
        atEnter={{ offset: -100, opacity: 0 }}
        atLeave={{ offset: -100, opacity: 0 }}
        atActive={{ offset: 0, opacity: 1 }}
        mapStyles={(styles) => ({
          transform: `translateX(${styles.offset}%)`,
          opacity: styles.opacity
        })}
        className="switch-wrapper"
      >
        <Route exact path="/home" render={({match}) => <RouteComponent text={match.path.slice(1)} />} />
        <Route path="/about" render={({match}) => <RouteComponent text={match.path.slice(1)} />}/>
        <Route path="/counter" component={Counter}/>
      </AnimatedSwitch>
    </Router>
  );
}
const HotApp = hot(App);
render(<HotApp />, document.getElementById('root'));