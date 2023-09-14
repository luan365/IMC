"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// seção 1: importação os módulos que vamos usar
const express_1 = __importDefault(require("express"));
// seção 2: constantes e variáveis globais
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
//* seção 3: IMPLEMENTAÇÃO DOS SERVIÇOS
/* app.post("/calcularIMC", (req, res) => {
    ///Primeira versão do código fraca
    const altura = req.body.altura;
    const peso = req.body.peso;
    const imc = peso / Math.pow(altura, 2);
    
    const conteudoResposta = {
        resultado : imc,
    }
    res.send(conteudoResposta);
}); */
app.post("/calcularIMC", (req, res) => {
    const altura = req.body.altura;
    const peso = req.body.peso;
    let status = "ERROR";
    let message = "";
    let imc = -1;
    if (peso !== undefined && altura !== undefined) {
        if (peso > 0 && altura > 0) {
            //fazer calculo
            imc = peso / Math.pow(altura, 2);
            status = "SUCCESS";
        }
        else if (peso <= 0 && altura <= 0)
            message = "Peso e altura estão menores ou igual a zero. Ambos devem ser maiores do que zero.";
        else if (peso <= 0)
            message = "Peso inválido. Deve ser maior que zero.";
        else
            message = "Altura inválida.";
    }
    else {
        //tratar caso da altura e/ou peso não existir
        message = "Peso e/ou altura nao foram imformados";
    }
    const conteudoResposta = {
        status: status,
        result: imc,
        message: message,
    };
    res.send(conteudoResposta);
});
// seção 4: Abrir a porta para servidor para funcionar.
// Colocar o servidor para receber as requisições nos serviços que ele possui.
app.listen(port, () => {
    console.log("Servidor HTTP em funcionamento...");
});
/*
    codigo responsável para chamar o backend
    * AO FINAL DO CÓDIGO USAR O CÓDIGO npx tsc NO TERMINAL
*/ 
