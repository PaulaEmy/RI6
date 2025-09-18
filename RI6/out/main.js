"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const mensagem_1 = __importDefault(require("./mensagem"));
const potencia_1 = __importDefault(require("./potencia"));
const multiplicacao_1 = __importDefault(require("./multiplicacao"));
const soma_1 = __importDefault(require("./soma"));
const subtracao_1 = __importDefault(require("./subtracao"));
const raizQuadrada_1 = __importDefault(require("./raizQuadrada"));
const Bhaskara_1 = __importDefault(require("./Bhaskara"));
let mensagens = new mensagem_1.default();
let iniciar = () => {
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    leitor.question(`Digite a operação seguida dos números:\n`, (valor) => {
        let instrucoes = valor.split(' ');
        let operacao = instrucoes[0];
        console.log(`Estas foram suas instruções: ${instrucoes}\n`);
        switch (operacao) {
            case 'Somar':
                let soma = new soma_1.default();
                console.log(`Resultado: ${soma.calcular(Number(instrucoes[1]), Number(instrucoes[2]))}\n`);
                break;
            case 'Subtrair':
                let sub = new subtracao_1.default();
                console.log(`Resultado: ${sub.calcular(Number(instrucoes[1]), Number(instrucoes[2]))}\n`);
                break;
            case 'Multiplicar':
                let mult = new multiplicacao_1.default();
                console.log(`Resultado: ${mult.calcular(Number(instrucoes[1]), Number(instrucoes[2]))}\n`);
                break;
            case 'Potencia':
                let pot = new potencia_1.default();
                console.log(`Resultado: ${pot.calcular(Number(instrucoes[1]), Number(instrucoes[2]))}\n`);
                break;
            case 'RaizQuadrada':
                let raiz = new raizQuadrada_1.default();
                console.log(`Resultado: ${raiz.calcular(Number(instrucoes[1]), 0)}\n`);
                break;
            case 'Bhaskara':
                let a = Number(instrucoes[1]);
                let b = Number(instrucoes[2]);
                let c = Number(instrucoes[3]);
                let bhaskara = new Bhaskara_1.default();
                console.log(bhaskara.calcular(a, b, c));
                break;
            case 'Sair':
                console.log("Encerrando...");
                leitor.close();
                break;
        }
    });
};
mensagens.boasVindas();
mensagens.listarOpcoes();
mensagens.comoUsar();
iniciar();
