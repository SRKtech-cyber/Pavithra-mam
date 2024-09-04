document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');

    const questions = [
        {
            lesson: "The Portrait of a Lady",
            options: ["Khushwant Singh", "Ruskin Bond", "R. K. Narayan"],
            answer: "Khushwant Singh"
        },
        {
            lesson: "A Photograph",
            options: ["Shirley Toulson", "John Keats", "William Wordsworth"],
            answer: "Shirley Toulson"
        },
        {
            lesson: "We’re Not Afraid to Die... if We Can All Be Together",
            options: ["Gordon Cook and Alan East", "Robert Louis Stevenson", "Jules Verne"],
            answer: "Gordon Cook and Alan East"
        }
    ];

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <p class="question-text">Guess the author of the lesson: ${q.lesson}</p>
            ${q.options.map(option => `
                <button onclick="checkAnswer('${q.answer}', '${option}')">${option}</button>
            `).join('')}
        `;
        quizContainer.appendChild(questionDiv);
    });
});

function checkAnswer(correctAnswer, selectedAnswer) {
    if (correctAnswer === selectedAnswer) {
        alert('Correct! Well done.');
    } else {
        alert('Try again!');
    }
}
