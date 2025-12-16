import z from "zod";
import { Knex } from "@/database/knex.config.js";
import type { tasks_params_schema } from "@/utils/schemas/tasks.schema.js";

type TaskParamsType = z.infer<typeof tasks_params_schema>

async function get_task_repository({ id }: TaskParamsType) {
    const task = await Knex("tasks as t").select("*").where({ "t.id": id }).first()

    return task
}

export { get_task_repository }