const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

let filmes = [
  { id: 1, nome: "Matrix" },
  { id: 2, nome: "Vingadores" },
  { id: 3, nome: "Carros" },
  { id: 4, nome: "Shrek" }
];

app.get('/api/filmes', (req, res) => {
  res.json(filmes);
});

// feature/post-filme
app.post('/api/filmes', (req, res) => {
  const novoFilme = {
    id: filmes.length + 1,
    nome: req.body.nome
  };
  filmes.push(novoFilme);
  res.status(201).json(novoFilme);
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:5000`);
});
