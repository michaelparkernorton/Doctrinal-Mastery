import scriptures from "./JSON/portBr.json" assert { type: "json" };

scriptures.forEach((scripture) => {
  // create a new scripture block element
  const newScripture = document.createElement("div");

  // and give it a reference and text
  const reference = document.createElement("p");
  const text = document.createElement("p");

  // add content to reference and text
  reference.textContent = `${scripture.Book} ${scripture.Chapter}:${scripture.StartVerse}`;
  text.textContent = `${scripture.Text}`;

  // add the text node to the newly created div
  newScripture.appendChild(reference);
  newScripture.appendChild(text);

  // add classes
  reference.classList.add("reference");
  text.classList.add("text");
  newScripture.classList.add("scripture");

  const referenceClass =
    "a" +
    scripture.Book.replace(/\s/g, "") +
    scripture.Chapter +
    scripture.StartVerse;
  text.classList.add(referenceClass);
  newScripture.classList.add(referenceClass);

  // add scripture to body
  document.body.appendChild(newScripture);

  reference.addEventListener("click", () => displayScripture(referenceClass));

});

const scriptureElements = document.querySelectorAll(".scripture");

function displayScripture(reference) {
  scriptureElements.forEach((scriptureElement) => {
    scriptureElement.style.display = "none";
  });
  const selector = "." + reference;
  const displayScripture = document.querySelectorAll(selector);
  displayScripture.forEach((element) => {
    element.style.display = "block";
  });
}

const book = document.querySelector(".LdM");
const texts = document.querySelectorAll(".text");
book.addEventListener("click", () => displayAllScriptures());

function displayAllScriptures() {
  texts.forEach((text) => {
    text.style.display = "none";
  });
  scriptureElements.forEach((scriptureElement) => {
    scriptureElement.style.display = "block";
  });
}
