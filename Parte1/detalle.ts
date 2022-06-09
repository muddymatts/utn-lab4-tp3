
export class Detalle {
    private kmSalida!: number
    private kmRegreso!: number
    private horaSalida!: number
    private horaRegreso!: number
    private minSalida!: number
    private minRegreso!: number

    constructor (){
        this.kmSalida=0
        this.kmRegreso=0
        this.horaSalida=0
        this.horaRegreso=0
        this.minSalida=0
        this.minRegreso=0    
    }

    public getKmSalida(){
        return this.kmSalida
    }

    public setKmSalida(kms:number){
        this.kmSalida=kms
    }

    public getKmRegreso(){
        return this.kmRegreso
    }
    
    public setKmRegreso(kmr:number){
        this.kmRegreso=kmr
    }

    public getHoraSalida(){
        return this.horaSalida
    }

    public setHoraSalida(hora:number){
        this.horaSalida=hora
    }
    
    public getHoraRegreso(){
        return this.horaRegreso
    }

    public setHoraRegreso(hora:number){
        this.horaRegreso=hora
    }
    
    public getMinSalida(){
        return this.minSalida
    }
    
    public setMinSalida(min:number){
        this.minSalida=min
    }

    public getMinRegreso(){
        return this.minRegreso
    }

    public setMinRegreso(min:number){
        this.minRegreso=min
    }
}