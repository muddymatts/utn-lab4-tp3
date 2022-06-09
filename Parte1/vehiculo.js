"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
class Vehiculo {
    constructor() {
        this.patente = "";
        this.marca = "";
        this.modelo = "0";
        this, this.hojaDeRuta = new Array();
    }
    getPatente() {
        return this.patente;
    }
    setPatente(patente) {
        this.patente = patente;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    getHojasDeRuta() {
        return this.hojaDeRuta;
    }
    addHojaDeRuta(hoja) {
        this.hojaDeRuta.push(hoja);
    }
    setHojasDeRuta(hojas) {
        this.hojaDeRuta = hojas;
    }
    calcularKmsRecorridos(fechaDesde, fechaHasta) {
        let kmsRecorridos = 0;
        this.hojaDeRuta.forEach(hoja => {
            if (hoja.getFecha().getDay >= fechaDesde.getDay &&
                hoja.getFecha().getDay <= fechaHasta.getDay) {
                kmsRecorridos += hoja.calcularTotalKilometros();
            }
        });
        return kmsRecorridos;
    }
}
exports.Vehiculo = Vehiculo;
