export default class Mensagem {
    public listarOpcoes = () => {
        console.log('Escolha um opção:')
        console.log('Somar, Subtrair, Multiplicar, Potencia, Raiz Quadrada\n')
    }

    public comoUsar = () => {
        console.log('Para usar digite os números e a opção de cálculo separados por espaço, como: "1.5 2.5 Somar')
        console.log('O resultado será a soma dos númeors: 4')
        console.log('Para encerrar digite "Sair"\n')
    }

    public boasVindas = () => {
        console.log('Bem vindo a calculadora !')
    }
}