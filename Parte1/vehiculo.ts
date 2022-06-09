import {HojaDeRuta} from './hojaDeRuta';

export class Vehiculo {
    private patente!: string;
    private marca!: string;
    private modelo!: string;
    private hojaDeRuta: Array<HojaDeRuta> 

    constructor(){
        this.patente=""
        this.marca=""
        this.modelo="0"
        this,this.hojaDeRuta= new Array<HojaDeRuta>() 
    }

    public getPatente() {
        return this.patente
    }

    public setPatente(patente:string){
        this.patente = patente
    }

    public getMarca() {
        return this.marca
    }

    public setMarca(marca:string){
        this.marca = marca
    }

    public getModelo(){
        return this.modelo
    }

    public setModelo(modelo:string){
        this.modelo = modelo
    }

    public getHojasDeRuta(){
        return this.hojaDeRuta
    }

    public addHojaDeRuta(hoja:HojaDeRuta){
        this.hojaDeRuta.push(hoja)
    }

    public setHojasDeRuta(hojas:Array<HojaDeRuta>){
        this.hojaDeRuta=hojas
    }

    public calcularKmsRecorridos(fechaDesde:Date,fechaHasta:Date):number{
        let kmsRecorridos:number = 0
        this.hojaDeRuta.forEach( hoja => {
            if(hoja.getFecha().getDay>=fechaDesde.getDay && 
                hoja.getFecha().getDay<=fechaHasta.getDay){
                    kmsRecorridos += hoja.calcularTotalKilometros()
                }

        });
        return kmsRecorridos
    }

}

