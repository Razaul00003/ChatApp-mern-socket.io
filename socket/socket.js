const io = require("socket.io")(8000, {
  cors: {
    origin: "*",
    method: ["GET", "POST"],
  },
});

let users = [];
const addUser = (userId, userInfo, socketId) => {
  const checkUser = users.some((u) => u.userId === userId);

  if (!checkUser) {
    users.push({ userId, socketId, userInfo });
  }
};

io.on("connection", (socket) => {
  console.log("socket working");
  socket.on("addUser", (userId, userInfo) => {
    addUser(userId, socket.id, userInfo);
    io.emit("getUser", users);
  });
});
