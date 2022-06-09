export class Cliente{

    numero:number
    razonSocial:string
    cuit:number
    facturas:Array<Factura>

    constructor(numero:number, razonSocial:string, cuit:number){
        this.cuit=cuit
        this.numero=numero
        this.razonSocial=razonSocial
        this.facturas = new Array<Factura>()
    }

    esValido(tipoPago:string):boolean{
        if(tipoPago == 'TR' || tipoPago == 'C'
        || tipoPago == 'TC'|| tipoPago == 'TD'
        || tipoPago == 'CC'){
            return true
        } else {
            return false
        }
    }

    totalFacturadoXTipoPago(tipoPago:string):number{
        let totalFacturas:number=0

        if(this.esValido(tipoPago)){
            this.facturas.forEach(factura => {
                if(factura.tipoPago==tipoPago){
                    totalFacturas += factura.totalFinal
                }
            })
        } else {
            this.facturas.forEach(factura => {
                totalFacturas += factura.totalFinal
            })
        }
        
        return totalFacturas
    }

}

export class Factura {

    letra:string
    numero:number
    recargo:number
    tipoPago:string
    totalItems:number
    totalFinal:number
    fecha:Date
    cliente:Cliente
    detalles:Array<DetalleFactura>

    constructor (letra:string,
        numero:number,
        recargo:number,
        tipoPago:string,
        fecha:Date,
        cliente:Cliente){
            this.letra=letra
            this.numero=numero
            this.recargo=recargo
            this.tipoPago=tipoPago
            this.detalles=new Array<DetalleFactura>()
            this.totalItems=0
            this.totalFinal=0
            this.fecha=fecha
            this.cliente=cliente
            
        }
 
        calcularTotalItems(){
            let total:number = 0
            this.detalles.forEach(detalle => {
                total += detalle.calcularSubtotal()
                //console.log(`Cantidad: ${detalle.cantidad}, producto: ${detalle.articulo.denominacion} precio: ${detalle.articulo.precio}, total: ${total}`)
            })
            this.totalItems=total
        }

        calcularTotalFinal(){
            this.totalFinal= this.totalItems+this.recargo
        }
}

export class DetalleFactura {

    articulo:Articulo
    factura:Factura
    cantidad:number
    subtotal:number

    constructor(
        articulo:Articulo,
        factura:Factura,
        cantidad:number,
    ){
        this.articulo=articulo
        this.factura=factura
        this.cantidad=cantidad
        this.subtotal=this.calcularSubtotal()
    }

    calcularSubtotal():number{
        return this.cantidad*this.articulo.precio
    }

}

export class Articulo {
    codigo:number
    denominacion:string
    precio:number
    unidadMedida:string

    constructor(
        codigo:number,
        denominacion:string,
        precio:number,
        unidadMedida:string,
    ) {
        this.codigo=codigo
        this.denominacion=denominacion
        this.precio=precio
        this.unidadMedida=unidadMedida
    }

}