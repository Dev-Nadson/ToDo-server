import z from "zod";
import { Knex } from "@/database/knex.config.js";
import type { update_task_body_schema, tasks_params_schema } from "@/utils/schemas/tasks.schema.js";
import { NotFoundError } from "@/utils/errors/app-errors.js";

type UpdateTaskBodyType = z.infer<typeof update_task_body_schema>
type TaskParamsType = z.infer<typeof tasks_params_schema>

async function conclude_task_repository({ id }: TaskParamsType, { current_date }: UpdateTaskBodyType) {

    const task = Knex("tasks as t").select("*").where({ "t.id": id }).first()
    if (!task) { throw new NotFoundError("Tarefa não encontrada!") }

    const [updatedTask] = await Knex("tasks as t").update({ "concluded_at": current_date }).where({ "t.id": id }).returning("*")

    return updatedTask
}

export { conclude_task_repository }