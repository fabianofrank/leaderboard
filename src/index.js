/* eslint-disable prefer-template */
import './style.css';

const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/NVMs7bDqCFiWd9Tmg47Y/scores/';

// GET
async function fetchScore() {
  const response = await fetch(baseURL);
  return response.json();
}

// POST
// My game ID NVMs7bDqCFiWd9Tmg47Y: console.log(response.json())
// First we create the ID for the object { name: 'Franks Game'}
async function postScore(objectData) {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(objectData),
  });
  return response.json();
}

// RENDER
const formContainer = document.querySelector('.form');
const renderScore = () => {
  fetchScore()
    .then((serverData) => {
      let html = '';
      serverData.result.forEach((data) => {
        let htmlSegment = `<p>${data.user}: ${data.score}</p>`;
        html += htmlSegment;
      });

      const container = document.querySelector('.container');
      container.innerHTML = html;
    });
};

// SUBMIT
const getScore = () => {
  const name = document.querySelector('.name').value;
  const scores = document.querySelector('.scores').value;
  postScore({ user: name, score: scores })
    .then(() => {
      name.value = '';
      scores.value = '';
      renderScore();
    });
};

 formContainer.addEventListener('submit', (e) => {
   getScore()
   e.preventDefault();
});

renderScore();
