"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HojaDeRuta = void 0;
class HojaDeRuta {
    constructor() {
        this.fecha = new Date();
        this.numero = 0;
        this.detalles = new Array();
        this.vehiculo;
    }
    getFecha() {
        return this.fecha;
    }
    setFecha(fecha) {
        this.fecha = fecha;
    }
    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    getVehiculo() {
        return this.vehiculo;
    }
    setVehiculo(vehiculo) {
        this.vehiculo = vehiculo;
    }
    getDetalles() {
        return this.detalles;
    }
    setDetalles(detalles) {
        this.detalles = detalles;
    }
    addDetalle(detalle) {
        this.detalles.push(detalle);
    }
    calcularTotalKilometros() {
        let total = 0;
        this.detalles.forEach(detalle => {
            total += (detalle.getKmRegreso() - detalle.getKmSalida());
        });
        return total;
    }
}
exports.HojaDeRuta = HojaDeRuta;
