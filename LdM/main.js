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

  // add scripture to body
  document.body.appendChild(newScripture);

  // // add the newly created element and its content into the DOM
  // const currentDiv = document.getElementById("div1");
  // document.body.insertBefore(newDiv, currentDiv);
});
