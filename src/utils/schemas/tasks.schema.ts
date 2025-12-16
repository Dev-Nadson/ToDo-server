import z from "zod";

const task_body_schema = z.object({
    name: z.string(),
    due_date: z.coerce.date(),
    current_date: z.coerce.date().optional()
})

const tasks_params_schema = z.object({
    id: z.string()
})

const update_task_body_schema = z.object({
    current_date: z.coerce.date()
})

export { task_body_schema, tasks_params_schema, update_task_body_schema }