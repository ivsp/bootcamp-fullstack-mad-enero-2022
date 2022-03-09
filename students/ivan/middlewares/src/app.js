import express from "express";
import cors from "cors";
import * as EmailValidator from "email-validator";

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;

// function getIp(req, resp, next) {
//   const { ip } = req.ip;
//   console.log(ip)
//   next();
// }

//app.use(getIp);

// app.get("/hello", (req, resp) => {
//   resp.send("hello");
// });

// app.get("/goodbye", (req, resp) => {
//   resp.send("Bye world");
// });

function emailValidate(req, resp, next) {
  const { email } = req.body;
  const isvalid = EmailValidator.validate(email);
  console.log(isvalid);
  if (isvalid) {
    next();
  } else {
    resp.status(400).json({ err: "El email no es correcto" });
  }
}

app.post("/", emailValidate, (req, resp) => {
  resp.status(200).json("El email es valido");
});

app.listen(port, () => console.log(`server listening on port ${port}`));
