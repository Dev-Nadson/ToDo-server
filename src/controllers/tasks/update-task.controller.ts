import type { FastifyReply, FastifyRequest } from "fastify";
import { task_body_schema, tasks_params_schema } from "@/utils/schemas/tasks.schema.js";
import { update_task_repository } from "@/repositories/update-task.repository.js";

async function update_task_controller(request: FastifyRequest, reply: FastifyReply) {
    const { name, due_date } = task_body_schema.parse(request.body)
    const { id } = tasks_params_schema.parse(request.params)

    const data = await update_task_repository({ id }, { name, due_date })

    return reply.status(200).send({ message: "Usuário Atualizado", data: data })
}

export { update_task_controller }