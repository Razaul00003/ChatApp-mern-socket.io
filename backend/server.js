const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");

const databaseConnect = require("./config/database");
const authRouter = require("./routes/authRoute");
const messengerRoute = require("./routes/messengerRoute");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

dotenv.config({
  path: "backend/config/config.env",
});

app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api/messenger", authRouter);
app.use("/api/messenger", messengerRoute);

const PORT = process.env.PORT || 5000;

//-------------------------------------

const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("This is from backend Sever");
  });
}
//-------------------------------------

databaseConnect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
