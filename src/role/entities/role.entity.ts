import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";



@Entity()
export class Role {

    @PrimaryGeneratedColumn('uuid')
    id: string;


    @Column({
        type: 'varchar',
        unique: true 
    })
    key: string


    @Column({
        type: 'varchar'
    })
    name: string

    @Column({
        type: 'varchar',
        nullable: true
    })
    description: string

    
    @CreateDateColumn({
        type: 'timestamp with time zone'
    })
    created_at: Date;


    @UpdateDateColumn({
        type: 'timestamp with time zone'
    })
    update_at: Date;

}
