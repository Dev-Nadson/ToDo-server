import z from "zod";
import { Knex } from "@/database/knex.config.js";
import type { tasks_params_schema } from "@/utils/schemas/tasks.schema.js";

type TaskParamsType = z.infer<typeof tasks_params_schema>

async function delete_task_repository({ id }: TaskParamsType) {
    await Knex("tasks as t").delete("*").where({ "t.id": id })
}

export { delete_task_repository }