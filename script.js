const messages = [
  "Are you sure about that?",
  "Think again, my love.",
  "I’m the missing piece to your puzzle.",
  "Say yes, and let’s make history together. ❤️",
  "You’re my sunshine, don’t leave me in the dark.",
  "I’m the one who’ll make your heart sing.",
  "But what if I’m your soulmate?",
  "I’m the answer to all your questions.",
  "I’m the one who’ll make you smile every day.",
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}