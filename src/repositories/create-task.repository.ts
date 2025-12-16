import z from "zod";
import { create_id } from "@/utils/utils.js";
import { Knex } from "@/database/knex.config.js";
import type { task_body_schema } from "@/utils/schemas/tasks.schema.js";
import { InternalServerError } from "@/utils/errors/app-errors.js";

type TaskBodyType = z.infer<typeof task_body_schema>

async function create_task_repository({ name, due_date }: TaskBodyType) {

    const id = create_id()
    if (!id) throw new InternalServerError("Erro ao criar o ID")

    const data = {
        id,
        name,
        due_date
    }

    await Knex("tasks as t").insert(data)
    const task = Knex("tasks as t").select("*").where({ "t.id": data.id })

    return task
}

export { create_task_repository }