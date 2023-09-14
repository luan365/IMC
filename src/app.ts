import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.post("/calcularIMC", (req, res) => {
    const altura = req.body.altura;
    const peso = req.body.peso;
    const imc = peso / Math.pow(altura, 2);
    
    const conteudoResposta = {
        resultado : imc,
    }
    res.send(conteudoResposta);
});

app.listen(port, () => {
    console.log("Servidor HTTP em funcionamento...")
});
