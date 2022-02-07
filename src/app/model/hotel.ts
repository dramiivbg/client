export class Hotel {

    public id?: number;
    public id_admin: number;
    public nombre: string;
    public direccion: string;
    public img : string;


    set( data: any ){

        this.id = data.id;
        this.id_admin = data.id_admin;
        this.nombre = data.nombre;
        this.direccion = data.direccion;

    }
}
