import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { columnCreatedAt, columnId, columnUpdatedAt, columnVarchar } from "../columns";

export class PaymentSituations1645656377166 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "payment_situations",
            columns: [
                columnId,
                columnVarchar("45"),
                {
                    name: "description",
                    type: "mediumtext",
                },
                {
                    name: "price",
                    type: "decimal",
                    precision: 10,
                    scale: 2,
                },
                columnCreatedAt,
                columnUpdatedAt
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("payment_situations");
    }

}
