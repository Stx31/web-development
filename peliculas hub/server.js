
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/register', (req, res) => {
  const { email, username, password } = req.body;
  const stmt = db.prepare("INSERT INTO users (email, username, password) VALUES (?, ?, ?)");
  stmt.run(email, username, password, function(err) {
    if (err) {
      return res.status(500).send('Error saving user');
    }
    res.status(200).send('User registered');
  });
  stmt.finalize();
});

app.get('/users', (req, res) => {
  db.all("SELECT email, username FROM users", (err, rows) => {
    if (err) {
      return res.status(500).send('Error retrieving users');
    }
    res.json(rows);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
