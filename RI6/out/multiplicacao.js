"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculo_1 = __importDefault(require("./calculo"));
class Multiplicacao extends calculo_1.default {
    calcular(num1, num2) {
        return num1 * num2;
    }
}
exports.default = Multiplicacao;
