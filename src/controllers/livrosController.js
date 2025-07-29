import livro from '../models/Livro.js';

class LivrosController {

    static async listarLivros(req, res) {
        try {
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).json({ message:`${error.message} - falha na requisição de livros`});
        }
    };
      static async listarLivrosPorId(req, res) {
        try {
            const id = req.params.id;
        const listaEncontrado = await livro.findById(id);
        res.status(200).json(listaEncontrado);
        } catch (error) {
            res.status(500).json({ message:`${error.message} - falha ao listar livros`});
        }
    };

    static async cadastrarLivro(req, res) {
        const novoLivro = new livro(req.body);
        try {
            const livroSalvo = await livro.create(req.body);
            res.status(201).json({message: "Livro cadastrado com sucesso", livro:novoLivro});
        } catch (error) {
            res.status(500).json({ message:`${error.message} - falha ao cadastrar livro`});
        }
    }
     static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
        await livro.findByIdAndUpdate(id,req.body);
        res.status(200).json({message: "Livro atualizado com sucesso"});
        } catch (error) {
            res.status(500).json({ message:`${error.message} - falha na atualização do livro`});
        }
    };
     static async deletarLivro(req, res) {
        try {
            const id = req.params.id;  
        await livro.findByIdAndDelete(id);
        res.status(200).json({message: "Livro removido com sucesso"});
        } catch (error) {
            res.status(500).json({ message:`${error.message} - falha ao remover livro`});
        }
    };
};

export default LivrosController; 