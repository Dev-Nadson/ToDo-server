import z from "zod";
import { Knex } from "@/database/knex.config.js";
import type { task_body_schema, tasks_params_schema } from "@/utils/schemas/tasks.schema.js";
import { NotFoundError } from "@/utils/errors/app-errors.js";

type TaskBodyType = z.infer<typeof task_body_schema>
type TaskParamsType = z.infer<typeof tasks_params_schema>

async function update_task_repository({ id }: TaskParamsType, { name, due_date }: TaskBodyType) {

    const data = {
        name,
        due_date
    }

    const task = Knex("tasks as t").select("*").where({ "t.id": id }).first()
    if (!task) { throw new NotFoundError("Tarefa não encontrada!") }

    const [updatedTask] = await Knex("tasks as t").update(data).where({ "t.id": id }).returning("*")

    return updatedTask
}

export { update_task_repository }