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
let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  })
}