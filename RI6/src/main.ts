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

    leitor.question(`Digite a operação seguida dos números:\n`, (valor: string) =>{
        let instrucoes = valor.split(' ')
        let operacao = instrucoes[0]   

        console.log(`Estas foram suas instruções: ${instrucoes}\n`)

        switch (operacao){
            case 'Somar':
                let soma = new Soma()
                console.log(`Resultado: ${soma.calcular(
                    Number(instrucoes[1]),
                    Number(instrucoes[2])
                )}\n`)
                break;

            case 'Subtrair':
                let sub = new Subtracao()
                console.log(`Resultado: ${sub.calcular(
                    Number(instrucoes[1]),
                    Number(instrucoes[2])
                )}\n`)
                break;

            case 'Multiplicar':
                let mult = new Multiplicacao()
                console.log(`Resultado: ${mult.calcular(
                    Number(instrucoes[1]),
                    Number(instrucoes[2])
                )}\n`)
                break;

            case 'Potencia':
                let pot = new Potencia()
                console.log(`Resultado: ${pot.calcular(
                    Number(instrucoes[1]),
                    Number(instrucoes[2])
                )}\n`)
                break;

            case 'RaizQuadrada':
                let raiz = new raizQuadrada()
                console.log(`Resultado: ${raiz.calcular(
                    Number(instrucoes[1]),
                    0
                )}\n`)
                break;

            case 'Bhaskara':
                let a = Number(instrucoes[1])
                let b = Number(instrucoes[2])
                let c = Number(instrucoes[3])
                let bhaskara = new Bhaskara()
                console.log(bhaskara.calcular(a, b, c))
                break;

            case 'Sair':
                console.log("Encerrando...")
                leitor.close()
                break;
        }
    })
}

mensagens.boasVindas()
mensagens.listarOpcoes()
mensagens.comoUsar()
iniciar()
