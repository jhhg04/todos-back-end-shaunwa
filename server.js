const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let todos = [
  {
    text: 'Go to the grocery store',
    isCompleted: true,
  },
  {
    text: 'Learn full-stack developmet',
    isCompleted: false,
  },
];

app.use(bodyParser.json());

app.get('/todos', (req, res) => {
  res.send(todos);
});

app.post('/todos', (req, res) => {
  const { newTodoText } = req.body;
  todos.push({
    text: newTodoText,
    isCompleted: false,
  });
  res.send(todos);
});

app.post('/todos/delete', (req, res) => {
  const { text } = req.body;
  todos = todos.filter((todo) => todo.text !== text);
  res.send(todos);
});

app.post('/todos/complete', (req, res) => {
  const { text } = req.body;
  todos.forEach((todo) => {
    if (todo.text === text) {
      todo.isCompleted = true;
    }
  });
  res.send(todos);
});

app.listen(8000, () => console.log('Server listening on prt 8000'));
