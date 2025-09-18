"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bhaskara {
    calcular(a, b, c) {
        let delta = b * b - 4 * a * c;
        if (delta < 0) {
            return `Não existem raízes reais (Δ = ${delta})`;
        }
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return `Δ = ${delta}, x1 = ${x1}, x2 = ${x2}`;
    }
}
exports.default = Bhaskara;
