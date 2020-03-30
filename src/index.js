import _ from 'lodash';

import './styles/style.css'
import InstagramIcon from './images/instagram.svg'
import printMe from './print'

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  const icon = new Image(100, 100);

     // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  icon.src = InstagramIcon;

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);
  element.appendChild(icon);
  return element;
}

document.body.appendChild(component());