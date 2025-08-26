const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value;
  addMessage(text, "user");
  input.value = "";

  // Fake AI response
  setTimeout(() => {
    addMessage("Hehe~ I’m a cute AI ✨", "bot");
  }, 500);
});
