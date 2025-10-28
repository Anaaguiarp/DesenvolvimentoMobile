const express = require('express');
const cors = require('cors');
const pool = require('../db/mysqlConnect');

const app = express();

//Midlewares básicos
app.use(cors());
app.use(express.json()); //Permitir que recebamos JSON nas requisições

function testaToken(token){
    return false;
}

app.get("/", async (req, res) => {
    res.json({status: "Ok"});
});

//GET em carros (R)
app.get("/getcars", async (req, res) => {
    try {
        const authorizationHeader = req.headers.authorization;
        console.log(`Auth Header ${authorizationHeader}`);
        return;

        if(testaToken()){
            const [rows] = await pool.execute(
                'SELECT * FROM carro;'
            );
    
            setTimeout(()=>{
                console.log("Simulando um delay de API");
                res.status(202).json(rows);
            }, 5000);
        }else{
            res.status(403).json({error: true, message: "Token inválido!"});
        }

    } catch (error){
        console.error("Erro ao realizar consulta: ", error);
    }
});

//GET em um carro especifico (R)
app.get("/getcars/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const [rows] = await pool.execute(
            'SELECT * FROM carro WHERE id = ?',
            [id]
        );
        console.log("Resultado da Query: ", rows);
        if(rows.length === 0) return res.status(404).json({error: false, message: "Carro não encontrado!"});
        res.status(200).json({error: false, car: rows[0]});
    }catch(error){

    }
})

//Inserindo um novo Carro (C)
app.post("/insertcar", async (req, res) => {
    try{
        const { pmarca, pmodelo } = req.body;
        
        if(!pmarca || pmodelo == null){
            return res.status(400).json({error: true, message: "Marca ou modelo não foi informado"});
        }

        const [result] = await pool.execute(
            'INSERT INTO carro(marca, modelo) VALUES(?, ?)',
            [pmarca, pmodelo]
        );

        console.log(result);

        if(result.affectedRows > 0){
            res.status(201).json({error: false, message: "Carro inserido"});
        }else{
            res.status(400).json({error: true, message: "Carro não inserido"});
        }
    }catch(error){
        console.error("Erro ao inserir: ", error);
    }
})

//Atualizando um carro (U)
app.put("/updatecar/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const {pmarca, pmodelo} = req.body;
    
        if(!pmarca || !pmodelo || !id) return res.status(400).json({error: true, message: "Informe: id, marca e modelo!"});
    
        const [result] = await pool.execute(
            'UPDATE carro SET marca = ?, modelo = ? WHERE id = ?',
            [pmarca, pmodelo, id]
        );
    
        console.log(result);
    
        if(result.affectedRows === 0) return res.status(400).json({error: true, message: "Não foi encontrado carro com esse ID"});
    
        const [rows] = await pool.execute(
            'SELECT * FROM carro WHERE id = ?',
            [id]
        )
    
        res.status(202).json({error: false, message: "Carro atualizado com sucesso!", carro: rows[0]});
    }catch(error){
        console.error("Erro ao atualizar: ", error);
        res.status(400).json({error: true, message: "Ocorreu um erro ao tentar atualizar o carro!"});
    }
})

//Removendo um carro (D)
app.delete("/deletecar/:id", async (req, res) => {
    try{
        const {id} = req.params;

        const [result] = await pool.execute(
            'DELETE FROM carro WHERE id = ?',
            [id]
        );

        if(result.affectedRows === 0) return res.status(400).json({error: true, message: "Erro ao remover carro, carro com o ID não encontrado"});
        res.status(200).json({error: false, message: "Carro removido com sucesso!"});
    }catch(error){
        console.error("Erro ao remover: ", error);
        res.status(400).json({error: true, message: "Erro ao remover carro!"});
    }


})


const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));