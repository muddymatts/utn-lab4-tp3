import { Detalle } from "./detalle";
import { HojaDeRuta } from "./hojaDeRuta";
import { Vehiculo } from "./vehiculo";


export class TestA {
    public static main () {
        let vehiculo1 = new Vehiculo()

        vehiculo1.setPatente("AB100BA")
        vehiculo1.setMarca("Ford")
        vehiculo1.setModelo("Fiesta")
        
            let hojaDeRuta1 = new HojaDeRuta()
            hojaDeRuta1.setNumero(15290)
            hojaDeRuta1.setVehiculo(vehiculo1)
            hojaDeRuta1.setFecha(new Date(2022,5,13))
            
                let detalle11 = new Detalle()
                detalle11.setKmSalida(12000)
                detalle11.setKmRegreso(12500)

            hojaDeRuta1.addDetalle(detalle11)
        
                let detalle12 = new Detalle()
                detalle12.setKmSalida(12500)
                detalle12.setKmRegreso(12750)

            hojaDeRuta1.addDetalle(detalle12)

                let detalle13 = new Detalle()
                detalle13.setKmSalida(12750)
                detalle13.setKmRegreso(13200)

            hojaDeRuta1.addDetalle(detalle13)

        vehiculo1.addHojaDeRuta(hojaDeRuta1)

            let hojaDeRuta2 = new HojaDeRuta()

            hojaDeRuta2.setNumero(15365)
            hojaDeRuta2.setVehiculo(vehiculo1)
            hojaDeRuta2.setFecha(new Date(2022,5,15))
            
                let detalle21 = new Detalle()
                detalle21.setKmSalida(15000)
                detalle21.setKmRegreso(15420)

            hojaDeRuta2.addDetalle(detalle21)
            
                let detalle22 = new Detalle()
                detalle22.setKmSalida(15420)
                detalle22.setKmRegreso(15875)

            hojaDeRuta2.addDetalle(detalle22)

                let detalle23 = new Detalle()
                detalle23.setKmSalida(15875)
                detalle23.setKmRegreso(15990)

            hojaDeRuta2.addDetalle(detalle23)

        vehiculo1.addHojaDeRuta(hojaDeRuta2)

        let hojaDeRuta3 = new HojaDeRuta()

            hojaDeRuta3.setNumero(15765)
            hojaDeRuta3.setVehiculo(vehiculo1)
            hojaDeRuta3.setFecha(new Date(2022,5,20))
            
                let detalle31 = new Detalle()
                detalle31.setKmSalida(15990)
                detalle31.setKmRegreso(16025)

            hojaDeRuta3.addDetalle(detalle31)
            
                let detalle32 = new Detalle()
                detalle32.setKmSalida(16025)
                detalle32.setKmRegreso(16370)

            hojaDeRuta3.addDetalle(detalle32)

                let detalle33 = new Detalle()
                detalle33.setKmSalida(16370)
                detalle33.setKmRegreso(16700)

            hojaDeRuta3.addDetalle(detalle33)

        vehiculo1.addHojaDeRuta(hojaDeRuta3)

        let fechaDesde:Date = new Date(2022,5,12)
        let fechaHasta:Date = new Date(2022,5,19)

        let kilometros:number = vehiculo1.calcularKmsRecorridos(fechaDesde,fechaHasta)


        console.log(`Se recorrieron ${kilometros} kilómetros en total desde ${fechaDesde.toDateString()} hasta ${fechaHasta.toDateString()}`);
    }
}

TestA.main()
