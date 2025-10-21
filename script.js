const chat = document.getElementById("chat-bubbles");
const input = document.getElementById("prompt-input");
const sendBtn = document.getElementById("send-btn");
const onboarding = document.getElementById("onboarding");
const startBtn = document.getElementById("start-btn");

function createBubble(text, isUser=false) {
  const b = document.createElement("div");
  b.className = "bubble" + (isUser ? " user" : "");
  b.textContent = text;
  chat.appendChild(b);
  chat.scrollTop = chat.scrollHeight;
}

function simulateTyping(text) {
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  chat.appendChild(bubble);
  let i = 0;
  const timer = setInterval(() => {
    bubble.textContent = text.slice(0, i);
    i++;
    chat.scrollTop = chat.scrollHeight;
    if (i > text.length) clearInterval(timer);
  }, 35);
}

function frostIntro() {
  simulateTyping("Hej! Jag är din AI-assistent. Vad vill du prata om idag?");
}

sendBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (!value) return;
  createBubble(value, true);
  input.value = "";
  sendBtn.disabled = true;
  setTimeout(() => simulateTyping("Jag förstår! Berätta gärna mer om det."), 700);
});

input.addEventListener("input", () => {
  sendBtn.disabled = input.value.trim().length === 0;
});

startBtn.addEventListener("click", () => {
  onboarding.classList.add("hidden");
  frostIntro();
});

window.addEventListener("load", () => {
  onboarding.classList.remove("hidden");
});
