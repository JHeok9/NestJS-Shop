import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Items {
    @PrimaryGeneratedColumn()
    seq: number;
    
    @Column({
        type: "varchar",
        length: 70,
        nullable: false,
        comment: "판매자"
    })
    userid: string;

    @Column({
        type: "int",
        length: 11,
        nullable: false,
        comment: "카테고리번호"
    })
    category_seq: number
    
    @Column({
        type: "varchar",
        length: 20,
        nullable: false,
        comment: "대분류"
    })
    main_category: string;
    
    @Column({
        type: "varchar",
        length: 20,
        nullable: false,
        comment: "중분류"
    })
    mid_category: string;

    @Column({
        type: "varchar",
        length: 50,
        nullable: false,
        comment: "상품명"
    })
    name: string;

    @Column({
        type: "int",
        length: 11,
        nullable: false,
        comment: "가격"
    })
    price: number;

    @Column({
        type: "int",
        length: 11,
        comment: "할인가"
    })
    sale_price: number;

    @Column({
        type: "int",
        length: 11,
        nullable: false,
        default: 0,
        comment: "재고"
    })
    cnt: number;

    @Column({
        type: "varchar",
        length: 150,
        comment: "이미지1"
    })
    img1: string;
    
    @Column({
        type: "varchar",
        length: 150,
        comment: "이미지2"
    })
    img2: string;

    @Column({
        type: "varchar",
        length: 150,
        comment: "이미지3"
    })
    img3: string;

    @Column({
        type: "varchar",
        length: 150,
        comment: "이미지4"
    })
    img4: string;

    @Column({
        type: "varchar",
        length: 150,
        comment: "이미지5"
    })
    img5: string;

    @Column({
        type: "varchar",
        length: 3,
        nullable: false,
        default: "n",
        comment: "삭제여부"
    })
    delete_check: string;

    @Column({
        type: "datetime",
        comment: "삭제일"
    })
    delete_dt: Date;

}