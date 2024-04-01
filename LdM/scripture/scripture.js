import scriptures from "../JSON/portBr.json" assert { type: "json" };
// Scripture list
// https://www.churchofjesuschrist.org/study/manual/doctrinal-mastery-core-document-2023/doctrinal-mastery-passages-and-key-phrases?lang=por

const scripture = scriptures[4];

// Update Title of Page with Scripture Reference
const title = document.querySelector("title");
const referenceText = `${scripture.Book} ${scripture.Chapter}:${scripture.StartVerse}  `;
title.textContent = referenceText;

// Create a scripture card
const scriptureCard = document.createElement("div");

// Give is a sciptureBox and audioBox
const scriptureBox = document.createElement("div");
const audioBox = document.createElement("div");

//SCRIPTURE BOX
// Create a reference and text for scripture box
const reference = document.createElement("h1");
const text = document.createElement("p");

// add content to reference, text, and audio source
reference.textContent = referenceText;
text.textContent = scripture.Text;

// Add reference and text to scripture box
scriptureBox.appendChild(reference);
scriptureBox.appendChild(text);

//AUDIO BOX
// Create audio for audio box
const audio = document.createElement("audio");

// Add controls and src for audio
audio.controls = true;
audio.src = scripture.Audio;

// add audio to audio box
audioBox.appendChild(audio);

// add scripture box and audio box to Scripture
scriptureCard.appendChild(scriptureBox);
scriptureCard.appendChild(audioBox);

// add classes
reference.classList.add("reference");
text.classList.add("text");
audioBox.classList.add("audioBox");
scriptureCard.classList.add("scriptureCard");
scriptureBox.classList.add("scriptureBox");

// add scripture to body
document.body.appendChild(scriptureCard);
