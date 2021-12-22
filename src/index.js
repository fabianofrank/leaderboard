import './style.css';

let scores = [
  {
    name: 'Name: ',
    score: 127,
  }
];

const setStored = () => localStorage.setItem('savedScore', JSON.stringify(scores));
const getStored = () => JSON.parse(window.localStorage.getItem('savedScore'));


class AddScore {
  constructor(name, score) {
    this.name = name+':';
    this.score = score;
  }
}

// DOM
const scoreContainer = document.querySelector('.scores')
const formContainer = document.querySelector('.form');

// Form
const form = document.createElement('form');
form.method = 'post';
const ul = document.createElement('ul');
const liOne = document.createElement('li');
const inputOne = document.createElement('input');
const inputTwo = document.createElement('input');
const liTwo = document.createElement('li');
const button = document.createElement('button');
button.classList.add('button');
const submit = document.createTextNode('Submit');
button.appendChild(submit);
// button.type = 'submit';
form.appendChild(ul);
ul.appendChild(liOne);
liOne.appendChild(inputOne);
ul.appendChild(liTwo);
liTwo.appendChild(inputTwo);
form.appendChild(button);
formContainer.appendChild(form);

const pushScore = () => {
  const newScore = new AddScore(inputOne.value, inputTwo.value);
  scores.push(newScore);
  inputOne.value = '';
  inputTwo.value = '';
  setStored();
  displayScore();
}

// const addScore = () => {
  
// }

const btnClass = document.querySelector('.button');
btnClass.addEventListener('click', (e) => {
  e.preventDefault();
  pushScore();
})

const displayScore = () => {
  scores = getStored();
  clearPrevious();
  iterateScore();
}

const iterateScore = () => {
  scores.forEach((item, i) => {
    scores[i].index = i;
    const div = document.createElement('div');
    div.classList.add('container');
    const name = document.createElement('p');
    const getName = document.createTextNode(item.name);
    name.appendChild(getName);
    const number = document.createElement('p');
    const getScore = document.createTextNode(item.score);
    number.appendChild(getScore);
    div.appendChild(name);
    div.appendChild(number);
    scoreContainer.appendChild(div);
  })
}

const clearPrevious = () => {
  const oldList = document.querySelectorAll('.container');
  [...oldList].forEach((e) => e.remove());
}

window.addEventListener('load', () => {
  displayScore();
});