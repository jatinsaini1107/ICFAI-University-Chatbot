const chatBody = document.getElementById('chat-body');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

/**
 * Adds a message to the chat.
 * @param {string} text - The message text.
 * @param {'user'|'bot'} sender - Who sends the message.
 */
function appendMessage(text, sender) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender);
  msg.textContent = text;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}

/**
 * Generates a simple bot response based on the user message.
 * @param {string} input - The user's input.
 * @returns {string} - Bot’s reply.
 */
function getBotResponse(input) {
  const normalized = input.toLowerCase().trim();
  const responses = {
    'what is photosynthesis': 'Photosynthesis is the process by which plants make food using sunlight, water, and carbon dioxide.',
    'define gravity': 'Gravity is the force by which a planet or other body draws objects toward its center.',
    'what is 2+2': '2 + 2 equals 4.',
    'who discovered penicillin': 'Penicillin was discovered by Alexander Fleming in 1928.'
  };
  return responses[normalized] || "Sorry, I don't know that yet. Can you ask something else?";
}

/**
 * Handles sending a message when the user interacts.
 */
function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;
  appendMessage(text, 'user');
  userInput.value = '';
  
  setTimeout(() => {
    const reply = getBotResponse(text);
    appendMessage(reply, 'bot');
  }, 500);
}

// Event listeners for button click and Enter key
sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') sendMessage();
});
