import { Vehiculo } from "./vehiculo"
import { Detalle } from "./detalle"

export class HojaDeRuta {
    private fecha!: Date
    private numero!: number
    private vehiculo!: Vehiculo
    private detalles:Array<Detalle>

    constructor(){
        this.fecha=new Date();
        this.numero=0;
        this.detalles=new Array<Detalle>()
        this.vehiculo
    }

    public getFecha(){
        return this.fecha
    }

    public setFecha (fecha:Date){
        this.fecha=fecha
    }

    public getNumero(){
        return this.numero
    }

    public setNumero(numero:number){
        this.numero=numero
    }

    public getVehiculo(){
        return this.vehiculo
    }

    public setVehiculo (vehiculo:Vehiculo){
        this.vehiculo=vehiculo
    }

    public getDetalles(){
        return this.detalles
    }

    public setDetalles(detalles:Array<Detalle>){
        this.detalles=detalles
    }

    public addDetalle (detalle:Detalle){
        this.detalles.push(detalle)
    }

    public calcularTotalKilometros(){
        let total:number = 0
        this.detalles.forEach(detalle => {
            total+=(detalle.getKmRegreso()-detalle.getKmSalida())
        });
        return total
    }
  
}