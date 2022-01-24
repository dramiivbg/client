export class Hotel {

    public id: number;
    public id_admin: number;
    public nombre: string;
    public direccion: string;


    set( id: number, id_admin: number, nombre: string, direccion: string ){

        this.id = id;
        this.id_admin = id_admin;
        this.nombre = nombre;
        this.direccion = direccion;

    }
}
