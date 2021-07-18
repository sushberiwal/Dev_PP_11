let name = prompt("Enter Your Name !");
let chatInputBox = document.querySelector(".chat-input");
let chatWindow = document.querySelector(".chat-window");

chatInputBox.addEventListener("keypress", function (e) {
  if (e.key == "Enter" && chatInputBox.value) {
    let chatRight = document.createElement("div");
    chatRight.classList.add("chat");
    chatRight.classList.add("right");
    chatRight.innerHTML = chatInputBox.value;
    chatWindow.append(chatRight);

    socket.emit("chat-append", chatInputBox.value);
    chatInputBox.value = "";
  }
});
