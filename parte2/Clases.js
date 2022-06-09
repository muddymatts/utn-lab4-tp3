"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Articulo = exports.DetalleFactura = exports.Factura = exports.Cliente = void 0;
class Cliente {
    constructor(numero, razonSocial, cuit) {
        this.cuit = cuit;
        this.numero = numero;
        this.razonSocial = razonSocial;
        this.facturas = new Array();
    }
    esValido(tipoPago) {
        if (tipoPago == 'TR' || tipoPago == 'C'
            || tipoPago == 'TC' || tipoPago == 'TD'
            || tipoPago == 'CC') {
            return true;
        }
        else {
            return false;
        }
    }
    totalFacturadoXTipoPago(tipoPago) {
        let totalFacturas = 0;
        if (this.esValido(tipoPago)) {
            this.facturas.forEach(factura => {
                if (factura.tipoPago == tipoPago) {
                    totalFacturas += factura.totalFinal;
                }
            });
        }
        else {
            this.facturas.forEach(factura => {
                totalFacturas += factura.totalFinal;
            });
        }
        return totalFacturas;
    }
}
exports.Cliente = Cliente;
class Factura {
    constructor(letra, numero, recargo, tipoPago, fecha, cliente) {
        this.letra = letra;
        this.numero = numero;
        this.recargo = recargo;
        this.tipoPago = tipoPago;
        this.detalles = new Array();
        this.totalItems = 0;
        this.totalFinal = 0;
        this.fecha = fecha;
        this.cliente = cliente;
    }
    calcularTotalItems() {
        let total = 0;
        this.detalles.forEach(detalle => {
            total += detalle.calcularSubtotal();
            //console.log(`Cantidad: ${detalle.cantidad}, producto: ${detalle.articulo.denominacion} precio: ${detalle.articulo.precio}, total: ${total}`)
        });
        this.totalItems = total;
    }
    calcularTotalFinal() {
        this.totalFinal = this.totalItems + this.recargo;
    }
}
exports.Factura = Factura;
class DetalleFactura {
    constructor(articulo, factura, cantidad) {
        this.articulo = articulo;
        this.factura = factura;
        this.cantidad = cantidad;
        this.subtotal = this.calcularSubtotal();
    }
    calcularSubtotal() {
        return this.cantidad * this.articulo.precio;
    }
}
exports.DetalleFactura = DetalleFactura;
class Articulo {
    constructor(codigo, denominacion, precio, unidadMedida) {
        this.codigo = codigo;
        this.denominacion = denominacion;
        this.precio = precio;
        this.unidadMedida = unidadMedida;
    }
}
exports.Articulo = Articulo;
