import express from 'express';

const app = express();
app.use(express.json());

const livros = [
    { id: 1, 
        titulo: 'A Fantástica Fabrica de Chocolate' },
    { id: 2, 
        titulo: 'O pequeno Princípe' },
]

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node.JS');
});
app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});
app.post('/livros', (req, res) => {
    livros.push(req.livro);
    res.status(201).send("Livro cadastrado com sucesso");
});


export default app;