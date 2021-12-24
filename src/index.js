/* eslint-disable prefer-template */
import './style.css';

const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/X9huMz5c5d7SxuSpxECG/scores/';

// GET
async function fetchScore() {
  const response = await fetch(baseURL);
  return response.json();
}

// POST
// My game ID NVMs7bDqCFiWd9Tmg47Y
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
const renderScore = () => {
  fetchScore()
    .then((serverData) => {
      let html = '';
      serverData.result.forEach((data) => {
        const htmlSegment = `<p>${data.user}: ${data.score}</p>`;
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
      document.querySelector('.name').value = '';
      document.querySelector('.scores').value = '';
      renderScore();
    });
};

const submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  getScore();
});

const refreshButton = document.querySelector('#refresh');
refreshButton.addEventListener('click', (e) => {
  e.preventDefault();
  renderScore();
});

renderScore();
