const express = require('express');
const app = express();
const port = 8080;
const jwt = require('jsonwebtoken');

const cors = require("cors");

app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

const secret = "my#jwt!secret!key!"
app.post('/login', async (req, res) => {
  console.log(req.body);
  const jwttoken = jwt.sign({
    email: req.body.email,
    role: "user"
  },
    secret, {
    expiresIn: 60 * 60 * 24
  });
  res.status(200).json({ token: jwttoken })

});

app.get('/verifyToken', async (req, res) => {
  try {
    console.log('dashboard api');
    console.log(req.headers)
    var bearerToken;
    var bearerHeader = req.headers['authorization'];

    if (bearerHeader) {
      var bearer = bearerHeader.split(" ");
      bearerToken = bearer[1];
      const tokenVerify = jwt.verify(bearerToken, secret);
      console.log(tokenVerify);
      return res.status(200).json({ msg: "user valid", data: tokenVerify });
    } else {
      console.log("Invalid token");
      return res.status(406).json({ msg: "No token received", data: null });
    }
  } catch (e) {
    console.log("error: ",e);
    return res.status(406).json({
      msg: "error",
      data: e.toString()
    })
  }

})
