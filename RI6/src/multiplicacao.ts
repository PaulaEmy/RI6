import Calculo from "./calculo";

export default class Multiplicacao extends Calculo{
    public calcular (num1 : number, num2 : number) : number {
        return num1 * num2
    }
}