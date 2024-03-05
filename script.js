let messageDisplay = document.querySelector('.message-display');

const quotes = [
    "'The only way to do great work is to love what you do.' - Steve Jobs",
    "'Life is what happens when you're busy making other plans.' - John Lennon",
    "'The future belongs to those who believe in the beauty of their dreams.' - Eleanor Roosevelt",
    "'In three words I can sum up everything I've learned about life: it goes on.' - Robert Frost",
    "'Success is not final, failure is not fatal: It is the courage to continue that counts.' - Winston S. Churchill",
    "'Don't cry because it's over, smile because it happened.' - Dr. Seuss",
    "'Strive not to be a success, but rather to be of value.' - Albert Einstein",
    "'The only limit to our realization of tomorrow will be our doubts of today.' - Franklin D. Roosevelt",
    "'You miss 100% of the shots you don't take.' - Wayne Gretzky",
    "'Do not wait to strike till the iron is hot, but make it hot by striking.'  - William Butler Yeats"
];

function generateMessage(array) {
    randomIndex = Math.floor(Math.random() * array.length);
    messageDisplay.innerHTML = `<p>${quotes[randomIndex]}</p>`
    return
}
