import express from 'express';
import conectaNaDataBase from './config/dbConnect.js';
import Livro from './models/Livro.js';

const conexao = await conectaNaDataBase();
conexao.on('error', (erro) => console.error(`Erro na conexão com o banco de dados: ${erro}`));

conexao.once('open', () => console.log('Conexão com o banco de dados estabelecida com sucesso'));

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node.JS');
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

