import express from 'express';
import conectaNaDataBase from './config/dbConnect.js';
import routes from './routes/index.js';



const conexao = await conectaNaDataBase();
conexao.on('error', (erro) => console.error(`Erro na conexão com o banco de dados: ${erro}`));

conexao.once('open', () => console.log('Conexão com o banco de dados estabelecida com sucesso'));

const app = express();

routes(app);

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

