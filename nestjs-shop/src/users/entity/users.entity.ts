import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {

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
        length: 100,
        nullable: false,
        comment: "비밀번호"
    })
    password: string;
    
    @Column({
        type: "varchar",
        length: 10,
        nullable: false,
        comment: "이름"
    })
    name: string;
    
    @Column({
        type: "varchar",
        length: 10,
        unique: true,
        nullable: false,
        comment: "닉네임"
    })
    nickname: string;
    
    @Column({
        type: "varchar",
        length: 10,
        nullable: false,
        comment: "생년월일"
    })
    birth: string;
    
    @Column({
        type: "varchar",
        length: 2,
        nullable: false,
        comment: "성별"
    })
    gender: string;
    
    @Column({
        type: "varchar",
        length: 12,
        nullable: false,
        comment: "핸드폰"
    })
    phone: string;
    
    @Column({
        type: "varchar",
        length: 50,
        nullable: false,
        comment: "이메일"
    })
    email: string;
    
    @Column({
        type: "varchar",
        length: 3,
        nullable: false,
        comment: "이용약관동의"
    })
    terms_agreement: string;
    
    @Column({
        type: "varchar",
        length: 3,
        nullable: false,
        comment: "개인정보동의"
    })
    privacy_agreement: string;
    
    @Column({
        type: "varchar",
        length: 150,
        comment: "프로필이미지"
    })
    profile_img: string;
    
    @Column({
        type: "varchar",
        length: 7,
        nullable: false,
        default: "nomal",
        comment: "유저등급"
    })
    user_level: string;
    
    @Column({
        type: "varchar",
        length: 5,
        comment: "sns로그인"
    })
    sns: string;
    
    @CreateDateColumn({
        type: "datetime",
        nullable: false,
        comment: "가입일"
    })
    join_dt: Date;
    
    @Column({
        type: "varchar",
        length: 3,
        nullable: false,
        default: "n",
        comment: "탈퇴여부"
    })
    leave_check: string;
    
    @DeleteDateColumn({
        type: "datetime",
        comment: "탈퇴일"        
    })
    leave_dt: Date;
}