export class User {
    id: number;
    nombres: string;
    apellidos: string;
    telefono?: string;
    email: string;
    password: string;
    token?: string;

    rol?: string;


    set( data: any ){

        this.id = data.id;
        this.nombres = data.nombres;
        this.apellidos = data.apellidos;
        this.telefono = data.telefono;
        this.email = data.email;
        this.password = data.password;

    }
}


