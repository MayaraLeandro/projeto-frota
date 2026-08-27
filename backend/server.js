const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor do Projeto Frota rodando com segurança!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});