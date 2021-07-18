let socket = io();
socket.emit("user-connected", name);

socket.on("user-joined", function (name) {
  // create a join div
  let chatJoin = document.createElement("div");
  chatJoin.classList.add("chat");
  chatJoin.classList.add("join");
  chatJoin.innerHTML = name + " joined chat";
  chatWindow.append(chatJoin);
});


socket.on("user-leave", function (name) {
    // create a join div
    let chatLeave = document.createElement("div");
    chatLeave.classList.add("chat");
    chatLeave.classList.add("leave");
    chatLeave.innerHTML = name + " left chat";
    chatWindow.append(chatLeave);
  });
  