export class Perfil {

    public id: number;
    public id_user: number;
    public rol: string;

    set(data: any){

        this.id = data.id;
        this.id_user = data.id_user;
        this.rol = data.rol;
    }
}
