import 'bootstrap/dist/css/bootstrap.min.css';
import _ from 'lodash';

const makeField = () => {
  const container = document.createElement('div');
  container.classList.add('container');

  const heading = document.createElement('h1');
  heading.classList.add('display-1');
  heading.textContent = 'Hello Bootstrap';
  container.append(heading);

  return container;
};

document.body.appendChild(makeField());
