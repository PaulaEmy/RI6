import * as readline from 'readline';
import Mensagem from './mensagem';
import Potencia from './potencia';
import Multiplicacao from './multiplicacao';
import Soma from './soma';
import Subtracao from './subtracao';
import raizQuadrada from './raizQuadrada';
import Bhaskara from './Bhaskara';

let mensagens = new Mensagem()

let iniciar = () => {
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    leitor.question(`Quais são os seus números e a operação desejada? \n`, (valor) =>{
        let instrucoes = valor.split(' ')
        let num1 = Number(instrucoes[0])
        let num2 = Number(instrucoes[1])
        let operacao = instrucoes[2]
        if (instrucoes.length == 1){
            operacao = instrucoes[0]
        }
        console.log(`Estas foram suas instruções: ${instrucoes}\n`)

        switch (operacao){
            case 'Somar':
                let calculo = new Soma()
                console.log(`O resultado da operação é: ${calculo.calcular(num1, num2)}\n`)
                break;
            case 'Subtrair':
                calculo = new Subtracao()
                console.log(`O resultado da operação é: ${calculo.calcular(num1, num2)}\n`)
                break;
            case 'Multiplicar':
                calculo = new Multiplicacao()
                console.log(`O resultado da operação é: ${calculo.calcular(num1, num2)}\n`)
                break;
            case 'Potencia':
                calculo = new Potencia()
                console.log(`O resultado da operação é: ${calculo.calcular(num1, num2)}\n`)
                break;
            case 'Raiz Quadrada':
                calculo = new raizQuadrada()
                console.log(`O resultado da operação é: ${calculo.calcular(num1, num2)}\n`)
                break;
            case 'Bhaskara':
                calculo = new Bhaskara()
            case 'Sair':
                break;
        }
    })
}
mensagens.boasVindas()
mensagens.listarOpcoes()
mensagens.comoUsar()
iniciar()