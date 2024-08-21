import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Address {

    @PrimaryGeneratedColumn()
    seq: number;
    
    @Column({
        type: "varchar",
        length: 70,
        unique: true,
        nullable: false,
        comment: "유저아이디"
    })
    userid: string;

    @Column({
        type: "varchar",
        length: 10,
        nullable: false,
        comment: "배송지이름"
    })
    addr_name: string;
    
    @Column({
        type: "varchar",
        length: 10,
        nullable: false,
        comment: "수령인"
    })
    addr_recipient: string;

    @Column({
        type: "varchar",
        length: 6,
        nullable: false,
        comment: "우편번호"
    })
    addr_num: string;

    @Column({
        type: "varchar",
        length: 100,
        nullable: false,
        comment: "기본주소"
    })
    addr_basic: string;
    
    @Column({
        type: "varchar",
        length: 100,
        nullable: false,
        comment: "상세주소"
    })
    addr_detail: string;

    @Column({
        type: "varchar",
        length: 12,
        nullable: false,
        comment: "핸드폰"
    })
    addr_phone: string;

    @Column({
        type: "varchar",
        length: 100,
        nullable: false,
        comment: "기본주소"
    })
    addr_def: string;
}