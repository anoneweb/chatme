function sendMessage() {
  const input = document.getElementById("message");
  const msg = input.value;
  const chat = document.getElementById("chat");

  chat.innerHTML += `<div><b>Anda:</b> ${msg}</div>`;
  input.value = "";
}
