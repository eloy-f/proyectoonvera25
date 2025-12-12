import {Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('usuarios')
export class Usuario{
    @PrimaryGeneratedColumn({name: 'id_usuario'})
    idUsuario: number; 
    @Column({ name: "nombres" })
    nombres: string;
    @Column({ name: "apellidos"})
    apellidos: string;
    @Column({ name: "correo", unique: true })
    correo: string;
    @Column({ name: "password" })
    password: string;
    @Column({ name: "fecha_creacion" })
    fechaCreacion: Date;
    @Column({ name: "estado"})
    estado: string;


}

