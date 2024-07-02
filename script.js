const buttonElement = document.querySelector(".generate-joke");
const divElementData = document.querySelector(".div-element");

const apiKey = "YOUR_API_KEY";
const apiURL = "https://api.api-ninjas.com/v1/dadjokes";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey
  }
};

async function generateJoke() {
  divElementData.innerHTML = "Updating...";
  buttonElement.innerHTML = "Loading...";
  buttonElement.disabled = true;
  buttonElement.style.cursor = "no-drop";
  const result = await fetch(apiURL, options);
  const response = await result.json();
  divElementData.innerHTML = response[0].joke;
  buttonElement.disabled = false;
  buttonElement.style.cursor = "pointer";
  buttonElement.innerHTML = "Tell me a joke";
}

buttonElement.addEventListener("click", generateJoke);
