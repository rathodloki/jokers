const jokeBtn = document.getElementById("jokeBtn");
const jokeContainer = document.getElementById("jokeContainer");
const jokeText = document.getElementById("jokeText");

async function getJoke() {
    jokeBtn.innerHTML = "Getting joke...";
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit");
    const data = await response.json();
  
    let joke = "";
    if (data.type === "single") {
      joke = data.joke;
    } else {
      joke = `${data.setup} ${data.delivery}`;
    }
    console.log(joke)
    
    jokeText.innerHTML = joke;
    jokeBtn.innerHTML = "Click for Joke";
  
    // Get the joke container element
    const jokeContainer = document.getElementById("jokeContainer");
    jokeContainer.style.display = "block";
    // Check if the joke container height is less than 200 pixels
    if (jokeContainer.offsetHeight < 200) {
      // Set the font size of the joke text to 24 pixels
      jokeText.style.fontSize = "24px";
    } else {
      // Set the font size of the joke text to 20 pixels
      jokeText.style.fontSize = "20px";
    }
  }

jokeBtn.addEventListener("click", getJoke);
