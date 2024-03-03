import scriptures from "../JSON/portBr.json" assert { type: "json" };
// Scripture list
// https://www.churchofjesuschrist.org/study/manual/doctrinal-mastery-core-document-2023/doctrinal-mastery-passages-and-key-phrases?lang=por

const scripture = scriptures[0];

// Update Title of Page with Scripture Reference
const title = document.querySelector("title");
const referenceText = `${scripture.Book} ${scripture.Chapter}:${scripture.StartVerse}  `;
title.textContent = referenceText;

// Create a scripture card
const newScripture = document.createElement("div");

// and give it a reference, text, and audio
const reference = document.createElement("h1");
const text = document.createElement("p");
const audio = document.createElement("audio");

// add content to reference, text, and audio source
reference.textContent = referenceText;
text.textContent = scripture.Text;
audio.controls = true;
audio.src = scripture.Audio;

// add the text node to the newly created div
newScripture.appendChild(reference);
newScripture.appendChild(text);
newScripture.appendChild(audio);

// add classes
reference.classList.add("reference");
text.classList.add("text");
newScripture.classList.add("scripture");

// add scripture to body
document.body.appendChild(newScripture);
