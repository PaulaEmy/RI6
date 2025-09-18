import Calculo from "./calculo";

export default class Potencia extends Calculo{
    public calcular (num1 : number, num2 : number) : number {
        return num1 ** num2
    }
}