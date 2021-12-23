const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

async function fetchScore() {
  const response = await fetch(baseURL);
  return response.json();
}

async function postScore(score) {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(score),
  });
  return response.json();
}