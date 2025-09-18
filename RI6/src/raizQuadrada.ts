import Calculo from "./calculo";

export default class raizQuadrada extends Calculo{
    public calcular (num1 : number, num2 : number) : number {
        return Math.sqrt(num1), Math.sqrt(num2);
    }
}