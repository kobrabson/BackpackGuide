require("dotenv").config();
express = require("express"),
massive = require("massive"),
session = require("express-session");

const authCtrl = require("./authController");
const packCtrl = require("./backpackController");
const gearCtrl = require("./gearController");

const app = express();

app.use(express.json());

const { SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env;

app.use(
    session({
      resave: false,
      saveUninitialized: true,
      secret: SESSION_SECRET,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30,
      },
    })
  );

  massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false },
  })
    .then((db) => {
      app.set("db", db);
      console.log("<-----Database Online----->");
    })
    .catch((err) => console.log(`Database error: ${err}`));















    app.listen(SERVER_PORT, () => console.log(`<-----Server Online port ${SERVER_PORT}----->`));