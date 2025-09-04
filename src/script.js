function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 75,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  //Make a request to the SheCodes AI API
  let userInstructionsInput = document.querySelector("#user-instructions");
  let apiKey = "f093ocaff400a6043tff45112437b840";
  let prompt = `Generate a funny joke about any subject requested ${userInstructionsInput.value}`;
  let context =
    "You are an expert in writing short, funny, and creative jokes about anything and everything. Your mission is to write a joke about the topic provided. Be original and avoid repeating jokes too often. Keep the joke concise and engaging";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.getElementById("poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `
  <div class="generating">
    Generating joke about ${userInstructionsInput.value}...
  </div>
`;

  userInstructionsInput.value = "";

  // Display the generated poem
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.getElementById("poem-topic-form");
poemFormElement.addEventListener("submit", generatePoem);
