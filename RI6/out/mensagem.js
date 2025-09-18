"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mensagem {
    constructor() {
        this.listarOpcoes = () => {
            console.log('Escolha um opção:');
            console.log('Somar, Subtrair, Multiplicar, Potencia, Raiz Quadrada\n');
        };
        this.comoUsar = () => {
            console.log('Para usar digite os números e a opção de cálculo separados por espaço, como: "1.5 2.5 Somar');
            console.log('O resultado será a soma dos númeors: 4');
            console.log('Para encerrar digite "Sair"\n');
        };
        this.boasVindas = () => {
            console.log('Bem vindo a calculadora !');
        };
    }
}
exports.default = Mensagem;
