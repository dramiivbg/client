export class Calificacion {

    public id: number;
    public id_habitacion: number;
    public id_user: number;
    public calificacion: number;
    public comentario: string;

    set(data: any){

        this.id = data.id;
        this.id_habitacion = data.id_habitacion;
        this.id_user = data.id_user;
        this.calificacion = data.calificacion;
        this.comentario = data.comentario;
    }

}
