const express = require('express');
const app = express();
app.use(express.json());

// Declare users array outside route handlers
let users = [];

app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = users.find(user => user.id === userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

app.listen(3000, () => console.log('Server listening on port 3000'));