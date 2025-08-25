const FLASHCARDS = [
  { QUESTION: "A computational model inspired by the structure of the human brian, consisting of interconnected nodes (neurons). It processes and learns from data by adjusting the connections between these nodes to recognize patterns, make predictions, or perform various tasks.", ANSWER: ["neural network"] },
  { QUESTION: "A general term for having computers solve problems by discovering algorithms through training without needing to be explicitly told what to do.", ANSWER: ["machine learning"] },
  { QUESTION: "Enormous datasets that often include vast amounts of informtion from diverse sources with varying and often complex structures.", ANSWER: ["big data"] },
  { QUESTION: "A subfield of linguistics and computer science focused on processing natural language (speech and text) to understand content correctly in context.", ANSWER: ["Natural Language Processing", "NLP"]},
  { QUESTION: "Learn patterns and relationships from vast amounts of training data to build a natural language model that allows them to comprehend, predict, and generate coherent human language.", ANSWER: ["Large Language Models", "Language Models", "LLMs", "Language Models and Large Language Models"]},
  { QUESTION: "A subfield of machine learning based on multi-layered neural networks.", ANSWER: ["Deep Learning"]},
  { QUESTION: "A form of AI capable of generating content like images, text, or even program code from prompts. Examples include OpenAI's ChatGPT and DALL-E, Google Bard, Meta's LLaMA, Midjourney, and Stable Diffusion.", ANSWER: ["Generative AI"]},
  { QUESTION: "A cutting-edge branch of AI that focuses on creating new content.", ANSWER: ["Generative AI"]},
  { QUESTION: "The incorrect outputs created by Generative AI as it lacks genuine understanding.", ANSWER: ["Hallucinations"]},
  { QUESTION: "A collection of step-by-step instructions that guide you through completing a task or solving a problem.", ANSWER: ["Algorithm"]},
  { QUESTION: "One way to visually document an algorithm using symbols similar to those found in flowcharts to document the required steps.", ANSWER: ["Process Diagram"]},
  { QUESTION: "Something that has properties, those properties can contain anything", ANSWER: ["Object"]},
  { QUESTION: "A yes or no decision", ANSWER: ["Binary Choice"]},
  { QUESTION: "A searching algorithm that finds an elemtent's position in a sorted array by comparing the middle element with the target", ANSWER: ["Binary Search"]},
  { QUESTION: "A coding error", ANSWER: ["Bug"]},
  { QUESTION: "A numerical value used to identify and access specific elements within a data structure, such as an array, list, or string", ANSWER: ["Index"]},
  { QUESTION: "A rudimentary set of instructions that the computer understands (aka binary code)", ANSWER: ["Machine Code"]},
  { QUESTION: "A piece of software that takes a program written in human-readable language and translates it into binary code", ANSWER: ["Compiler"]},
  { QUESTION: "Human-readable code created by the programmer", ANSWER: ["Source Code"]},
  { QUESTION: "A general-purpose programming language originally intended to bring dynamic behavior to websites", ANSWER: ["JavaScript"]},
  { QUESTION: "Precise rules within a programming language", ANSWER: ["Syntax"]},
  { QUESTION: "Basic building block in JavaScript. A sentence that conveys one command", ANSWER: ["Statement"]},
  { QUESTION: "What does a ; do?", ANSWER: ["Terminates a statement"]},
  { QUESTION: "True or False: Statements are processed in order from top to bottom?", ANSWER: ["True"]},
  { QUESTION: "Lines of text that programmers embed in code as documentation. Comments enable programmers to leave human-readable messages in their code. The compiler ignores them.", ANSWER: ["Comments"]},
  { QUESTION: "What symbol(s) do you use for a single-line comment?", ANSWER: ["//"]},
  { QUESTION: "What symbol(s) do you use for a multi-line comment?", ANSWER: ["/* and */"]},
  { QUESTION: "Blank lines, spaces and tabs interspersed throughout the code", ANSWER: ["White Space"]},
  { QUESTION: "Text-based device that converses with the program user", ANSWER: ["Console"]},
  { QUESTION: "An outline of the steps you need to walk through in code.", ANSWER: ["Pseudocode"]},
  { QUESTION: "A name that represents a data value", ANSWER: ["Variable"]},
  { QUESTION: "Chatacter data/words (you are providing the value directly in the code", ANSWER: ["literal values", "literals"]},
  { QUESTION: "Combines variables", ANSWER: ["Expression"]},
  { QUESTION: "Similar to variables in that they also refer to some data. However, you cannot make changes to their value once it is declared", ANSWER: ["Constant", "constants"]},
  { QUESTION: "Holds a numeric value", ANSWER: ["Number", "Number data type"]},
  { QUESTION: "A sequence of zero or more characters enclosed in a single or double quotation marks", ANSWER: ["String", "String data type"]},
  { QUESTION: "Can store only two possible values: true or false.", ANSWER: ["Boolean"]},
  { QUESTION: "Holds a set of related properties/variables for a value.", ANSWER: ["Object", "Objects"]},
  { QUESTION: "Is defined by placing property names and values inside a set of curly braces", ANSWER: ["Object Literals"]},
  { QUESTION: "Reperences the individual properties of an object", ANSWER: ["Dot Notation"]}
];

let currentIndex = 0;
let score = 0;
let wrong = 0;
let study = [];

const questionEl = document.getElementById("question");
const userAnswerEl = document.getElementById("userAnswer");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const wrongE1 = document.getElementById("wrong");
const submitBtn = document.getElementById("submitBtn");

function showCard() {
  questionEl.textContent = FLASHCARDS[currentIndex].QUESTION;
  userAnswerEl.value = "";
  feedbackEl.textContent = "";
}

showCard();

submitBtn.addEventListener("click", () => {
  const userAnswer = userAnswerEl.value.trim().toLowerCase();
  const correct = FLASHCARDS[currentIndex].ANSWER.some(
    ans => ans.toLowerCase() === userAnswer
  );

  if (correct) {
    feedbackEl.textContent = "✅ Correct!";
    feedbackEl.style.color = "green";
    score++;
  } else {
    feedbackEl.textContent = `❌ Nope! Correct: ${FLASHCARDS[currentIndex].ANSWER.join(", ")}`;
    feedbackEl.style.color = "red";
    wrong++;
    study.push(FLASHCARDS[currentIndex]);
  }

  scoreEl.textContent = `Score: ${score}`;
  wrongE1.textContent = `Wrong: ${wrong}`;

  currentIndex++;
  
  if (currentIndex >= FLASHCARDS.length) {
    feedbackEl.textContent += "\n🎉 Quiz Finished!";
    submitBtn.disabled = true;

    if (study.length > 0) {
      let studyOutput = "<h2>Study These Again:</h2><ul>";
      study.forEach(card => {
        studyOutput += `<li><strong>Q:</strong> ${card.QUESTION} <br> <strong>A:</strong> ${card.ANSWER.join(", ")}</li>`;
      });
      studyOutput += "</ul>";
      document.getElementById("study").innerHTML = studyOutput;
    } else {
      document.getElementById("study").innerHTML = "<p>🎉 You got everything right!</p>";
    }
  } else {
    setTimeout(showCard, 1500);
  }
});