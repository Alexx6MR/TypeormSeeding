import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    rating: number;

    @Column()
    image: string;

    @Column()
    article_nummer: number;

    @Column()
    category: string;

    @Column()
    colors: string;

    @Column()
    sizes: string;

    @Column()
    sold: number;

    @Column()
    storage_amount: number;





}
