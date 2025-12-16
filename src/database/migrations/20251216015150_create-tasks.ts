import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("tasks", (table) => {
        table.string("id").primary().notNullable()
        table.timestamp("due_date").notNullable()
        table.timestamp("created_at").defaultTo(knex.fn.now()).notNullable()
        table.timestamp("concluded_at").defaultTo(null)
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("tasks")
}

