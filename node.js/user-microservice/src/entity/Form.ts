import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { type } from "os";

@Entity()
export class Form{
    @PrimaryGeneratedColumn()
     id: number;
     
     @Column()
     formName: String;
    
     @Column("text")
     formStruct: String;

    constructor(){

    }

   

}