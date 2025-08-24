const FLASHCARDS = [
  { QUESTION: "A computational model inspired by the structure of the human brian, consisting of interconnected nodes (neurons). It processes and learns from data by adjusting the connections between these nodes to recognize patterns, make predictions, or perform various tasks.", ANSWER: ["neural network"] },
  { QUESTION: "A general term for having computers solve problems by discovering algorithms through training without needing to be explicitly told what to do.", ANSWER: ["machine learning"] },
  { QUESTION: "Enormous datasets that often include vast amounts of informtion from diverse sources with varying and often complex structures.", ANSWER: ["big data"] },
  { QUESTION: "A subfield of linguistics and computer science focused on processing natural language (speech and text) to understand content correctly in context.", ANSWER: ["Natural Language Processing", "NLP"]},
  { QUESTION: "Learn patterns and relationships from vast amounts of training data to build a natural language model that allows them to comprehend, predict, and generate coherent human language.", ANSWER: ["Large Language Models", "Language Models", "LLMs", "Language Models and Large Language Models"]},
  { QUESTION: "A subfield of machine learning based on multi-layered neural networks.", ANSWER: ["Deep Learning"]},
  { QUESTION: "A form of AI capable of generating content like images, text, or even program code from prompts. Examples include OpenAI's ChatGPT and DALL-E, Google Bard, Meta's LLaMA, Midjourney, and Stable Diffusion.", ANSWER: ["Generative AI"]},
  { QUESTION: "A cutting-edge branch of AI that focuses on creating new content.", ANSWER: ["Generative AI"]},
  { QUESTION: "The incorrect outputs created by Generative AI as it lacks genuine understanding.", ANSWER: ["Hallucinations"]}
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const userAnswerEl = document.getElementById("userAnswer");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const submitBtn = document.getElementById("submitBtn");

function showCard() {
  questionEl.textContent = FLASHCARDS[currentIndex].QUESTION;
  userAnswerEl.value = "";
  feedbackEl.textContent = "";
}

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
  }

  scoreEl.textContent = `Score: ${score}`;

  currentIndex++;
  if (currentIndex >= FLASHCARDS.length) {
    feedbackEl.textContent += "\n🎉 Quiz Finished!";
    submitBtn.disabled = true;
  } else {
    setTimeout(showCard, 1500);
  }
});

showCard();