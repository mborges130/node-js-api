import express from 'express';

const app = express();
app.use(express.json());

const livros = [
    { id: 1, 
        titulo: 'A Fantástica Fabrica de Chocolate' },
    { id: 2, 
        titulo: 'O pequeno Princípe' },
]
function buscarLivro(id) {
    return livros.findIndex(livro => livro.id === Number(id));
};

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node.JS');
});
app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});
app.get('/livros/:id', (req, res) => {
    const index = buscarLivro(req.params.id);
    if (index !== -1) {
        res.status(200).json(livros[index]);
    } else {
        res.status(404).send("Livro não encontrado");
    }
});
app.post('/livros', (req, res) => {
    livros.push(req.livro);
    res.status(201).send("Livro cadastrado com sucesso");
});

app.put('/livros/:id', (req, res) => {
    const index = buscarLivro(req.params.id);
    if (index !== -1) {
        livros[index].titulo = req.body.titulo;
        res.status(200).send("Livro atualizado com sucesso");
    } else {
        res.status(404).send("Livro não encontrado");
    }   
});

app.delete('/livros/:id', (req, res) => {
    const index = buscarLivro(req.params.id);  
    if (index !== -1) {
        livros.splice(index, 1);
        res.status(200).send("Livro removido com sucesso");
    } else {
        res.status(404).send("Livro não encontrado");
    }
});

export default app;