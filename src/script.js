function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "La tombe dit à la rose",
    autoStart: true,
    delay: 75,
    cursor: "",
  });
}

let poemFormElement = document.getElementById("poem-topic-form");
poemFormElement.addEventListener("submit", generatePoem);
