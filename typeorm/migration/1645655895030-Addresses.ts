import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { columnCreatedAt, columnId, columnUpdatedAt } from "../columns";

export class Addresses1645655895030 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "addresses",
            columns: [
                columnId,
                {
                    name: "street",
                    type: "varchar",
                    length: "191",
                    isNullable: false,
                },
                {
                    name: "number",
                    type: "varchar",
                    length: "16"
                },
                {
                    name: "complement",
                    type: "varchar",
                    length: "191"
                },
                {
                    name: "district",
                    type: "varchar",
                    length: "191",
                    isNullable: false,
                },
                {
                    name: "city",
                    type: "varchar",
                    length: "191",
                    isNullable: false,
                },
                {
                    name: "state",
                    type: "varchar",
                    length: "191",
                    isNullable: false,
                },
                {
                    name: "country",
                    type: "varchar",
                    length: "191",
                    isNullable: false,
                },
                {
                    name: "zipcode",
                    type: "varchar",
                    length: "8",
                    isNullable: false,
                },
                {
                    name: "personId",
                    type: "int",
                    isNullable: false,
                },
                columnCreatedAt,
                columnUpdatedAt
            ],
            foreignKeys: [{
                columnNames: ["personId"],
                referencedColumnNames: ["id"],
                referencedTableName: "persons",
                name: "FK_addresses_persons",
                onDelete: "CASCADE",
            }]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('addresses');
    }

}
