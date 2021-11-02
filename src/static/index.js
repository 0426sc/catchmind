const socket = io("/");

// socket.on("WTF?", ({message}) => console.log({message}));

function handleMessageNoti(data) {
    const { message, nickname } = data;
    console.log(`${nickname} said  ${message}`);
}

socket.on("WTF?", handleMessageNoti);

function sendMessage(message) {
    socket.emit("holy moly", { message });
}

function setNickname(nickname) {
    socket.emit("ty", { nickname });
}