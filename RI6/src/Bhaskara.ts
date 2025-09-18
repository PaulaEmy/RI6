export default class Bhaskara {
    public calcular(a: number, b: number, c: number): string {
        let delta = b*b - 4*a*c;

        if (delta < 0) {
            return `Não existem raízes reais (Δ = ${delta})`
        }

        let x1 = (-b + Math.sqrt(delta)) / (2*a);
        let x2 = (-b - Math.sqrt(delta)) / (2*a);

        return `Δ = ${delta}, x1 = ${x1}, x2 = ${x2}`;
    }
}
