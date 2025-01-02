const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  // Assume 'users' is an in-memory array for simplicity
  let users = [];
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

//This is the problematic code
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = users.find(user => user.id === userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

app.listen(3000, () => console.log('Server listening on port 3000'));