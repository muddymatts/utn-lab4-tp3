"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Detalle = void 0;
class Detalle {
    constructor() {
        this.kmSalida = 0;
        this.kmRegreso = 0;
        this.horaSalida = 0;
        this.horaRegreso = 0;
        this.minSalida = 0;
        this.minRegreso = 0;
    }
    getKmSalida() {
        return this.kmSalida;
    }
    setKmSalida(kms) {
        this.kmSalida = kms;
    }
    getKmRegreso() {
        return this.kmRegreso;
    }
    setKmRegreso(kmr) {
        this.kmRegreso = kmr;
    }
    getHoraSalida() {
        return this.horaSalida;
    }
    setHoraSalida(hora) {
        this.horaSalida = hora;
    }
    getHoraRegreso() {
        return this.horaRegreso;
    }
    setHoraRegreso(hora) {
        this.horaRegreso = hora;
    }
    getMinSalida() {
        return this.minSalida;
    }
    setMinSalida(min) {
        this.minSalida = min;
    }
    getMinRegreso() {
        return this.minRegreso;
    }
    setMinRegreso(min) {
        this.minRegreso = min;
    }
}
exports.Detalle = Detalle;
