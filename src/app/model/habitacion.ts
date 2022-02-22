import { Type } from "@angular/core";

export class Habitacion {

    public id: number;
    public id_hotel: number;
    public nombre: string;
    public valor: number;
    public descripcion: string;
    public img: string;
    public calificacion?: number;
    public cantidad?:number;

    set(data: any){
        this.id = data.id;
        this.id_hotel = data.id_hotel;
        this.nombre = data.nombre;
        this.valor = data.valor;
        this.descripcion = data.descripcion;
        this.img = data.img;
    }

}
