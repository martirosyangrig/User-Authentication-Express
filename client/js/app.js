const div = document.querySelector("div");
const score = document.querySelector(".score");
const username = document.querySelector(".userName");

fetch("/result") // get user result
    .then(res => res.json())

    .then(res => { // showing them
        username.textContent =`Dear ${res.username}`;
        score.textContent = `${res.result}/10`;
        
    });