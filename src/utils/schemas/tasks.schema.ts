import z from "zod";

const task_body_schema = z.object({
    name: z.string(),
    due_date: z.date()
})

const tasks_params_schema = z.object({
    id: z.string()
})

export { task_body_schema, tasks_params_schema }