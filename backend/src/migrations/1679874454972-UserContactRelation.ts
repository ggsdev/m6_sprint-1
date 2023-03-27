import { MigrationInterface, QueryRunner } from "typeorm";

export class UserContactRelation1679874454972 implements MigrationInterface {
    name = 'UserContactRelation1679874454972'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "cellphone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "cellphone" character varying(9) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_99b35f9f80eabacad4cb28c46ed" UNIQUE ("cellphone")`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_30ef77942fc8c05fcb829dcc61d" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_30ef77942fc8c05fcb829dcc61d"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_99b35f9f80eabacad4cb28c46ed"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "cellphone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "cellphone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "userId"`);
    }

}
