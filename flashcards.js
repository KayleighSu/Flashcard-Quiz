const FLASHCARDS = [
    { QUESTION: 'A computational model inspired by the structure of the human brain consisting of interconnected nodes (neurons). It processes and learns from data by adjusting the connections between these nodes to recognize patterns, make predictions, or perform various tasks.', ANSWER: ['neural network'] },
    { QUESTION: 'A general term for having computers solve problems by discovering algorithms through training without needing to be explicitly told what to do.', ANSWER: ['machine learning'] },
    { QUESTION: 'Enormous datasets that often include vast amounts of information from diverse sources with varying and often complex structures.', ANSWER: ['big data'] },
    { QUESTION: 'A subfield of linguistics and computer science focused on processing natural language (speech and text) to understand content correctly in context.', ANSWER: ['natural language processing', 'nlp'] },
    { QUESTION: 'Learn patterns and relationships from vast amounts of training data to build a natural language model that allows them to comprehend, predict, and generate coherent human language.', ANSWER: ['large language models', 'llms', 'language models'] },
    { QUESTION: 'A subfield of machine learning based on multi-layered neural networks', ANSWER: ['deep learning'] },
    { QUESTION: "A form of AI capable of generating content like images, text, or even program code from prompts. Examples include OpenAI's ChatGPT and DALL-E, Google Bard, Meta's LLaMA, Midjourney, and Stable Diffusion.", ANSWER: ['generative ai'] },
    { QUESTION: 'A cutting-edge branch of AI that focuses on creating new content', ANSWER: ['generative ai'] },
    { QUESTION: 'The incorrect outputs created by Generative AI as it lacks genuine understanding', ANSWER: ['hallucinations'] }
];

// ✅ Pick a random flashcard
function GET_RANDOM_CARD(CARDS_ARRAY) {
    const INDEX = Math.floor(Math.random() * CARDS_ARRAY.length);
    return CARDS_ARRAY[INDEX];
}

// ✅ Import prompt-sync
const PROMPT = require("prompt-sync")({ sigint: true });

// ✅ Main game loop
function PLAY_FLASHCARD_GAME(CARDS_ARRAY) {
    let SCORE = 0;
    let PLAY_AGAIN = "y";

    while (PLAY_AGAIN.toLowerCase() === "y") {
        const CARD = GET_RANDOM_CARD(CARDS_ARRAY);
        const USER_ANSWER = PROMPT(`${CARD.QUESTION} `);

        // Check if user answer matches any of the possible answers
        const IS_CORRECT = CARD.ANSWER.some(
            ANSWER_OPTION => ANSWER_OPTION.toLowerCase() === USER_ANSWER.trim().toLowerCase()
        );

        if (IS_CORRECT) {
            console.log('✅ Correct!');
            SCORE++;
        } else {
            console.log(`❌ Nope! The correct answers were: ${CARD.ANSWER.join(", ")}`);
        }

        console.log(`Current Score: ${SCORE}`);
        PLAY_AGAIN = PROMPT("Play Again? (y/n): ");
    }

    console.log(`Final Score: ${SCORE}`);
}

// ✅ Run the game
PLAY_FLASHCARD_GAME(FLASHCARDS);