import { Factura, Cliente, DetalleFactura, Articulo } from "./Clases"

class TestB {
    public static main () {
        let art1 = new Articulo(1500,"Harina",10.5,"Kg")
        let art2 = new Articulo(1510,"Azucar",50.9,"Kg")
        let art3 = new Articulo(1600,"Cerveza Andes",100.78,"Lt")
        let art4 = new Articulo(1750,"Jabon de tocador",45.8,"Un")
        let art5 = new Articulo(1800,"Silla de Jardin",750.0,"Un")

        let cliente = new Cliente(25,"Pedro Gomez",20334825583)

        let factura1 = new Factura("B",1001,250,"C",new Date(2022,4,13),cliente)

        let detalle11 = new DetalleFactura(art1,factura1,3)
        let detalle12 = new DetalleFactura(art3,factura1,5)
        let detalle13 = new DetalleFactura(art5,factura1,4)

        factura1.detalles.push(detalle11)
        factura1.detalles.push(detalle12)
        factura1.detalles.push(detalle13)

        factura1.calcularTotalItems()
        factura1.calcularTotalFinal()

        cliente.facturas.push(factura1)

        let factura2 = new Factura("C",1005,400,"TR",new Date(2022,4,12),cliente)

        let detalle21 = new DetalleFactura(art2,factura2,1)
        let detalle22 = new DetalleFactura(art4,factura2,6)
        let detalle23 = new DetalleFactura(art5,factura2,2)

        factura2.detalles.push(detalle21)
        factura2.detalles.push(detalle22)
        factura2.detalles.push(detalle23)

        factura2.calcularTotalItems()
        factura2.calcularTotalFinal()

        cliente.facturas.push(factura2)

        let factura3 = new Factura("C",1005,350,"TR",new Date(2022,4,12),cliente)

        let detalle31 = new DetalleFactura(art1,factura3,5)
        let detalle32 = new DetalleFactura(art4,factura3,2)

        factura3.detalles.push(detalle31)
        factura3.detalles.push(detalle32)

        factura3.calcularTotalItems()
        factura3.calcularTotalFinal()

        cliente.facturas.push(factura3)

        console.log(`El monto total pagado por ${cliente.razonSocial} de tipo C es ${cliente.totalFacturadoXTipoPago('C')}`)
        console.log(`El monto total pagado por ${cliente.razonSocial} de tipo TR es ${cliente.totalFacturadoXTipoPago('TR')}`)
        console.log(`El monto total pagado por ${cliente.razonSocial} de tipo XX es ${cliente.totalFacturadoXTipoPago('XX')}`)
    }
}

TestB.main()