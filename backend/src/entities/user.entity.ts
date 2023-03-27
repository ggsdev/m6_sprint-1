import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BeforeInsert,
    OneToMany,
} from "typeorm";
import { hashSync } from "bcryptjs";
import { Exclude } from "class-transformer";
import { Contact } from "./contact.entity";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 50, unique: true })
    email: string;

    @Column()
    @Exclude()
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @BeforeInsert()
    hashPassword() {
        this.password = hashSync(this.password, 10);
    }

    @OneToMany(() => Contact, (contacts) => contacts.user)
    contacts: Contact[];
}
