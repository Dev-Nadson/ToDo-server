import type { FastifyReply, FastifyRequest } from "fastify";
import { tasks_params_schema, update_task_body_schema } from "@/utils/schemas/tasks.schema.js";
import { conclude_task_repository } from "@/repositories/conclude-task.repository.js";

async function conclude_task_controller(request: FastifyRequest, reply: FastifyReply) {
    const { current_date } = update_task_body_schema.parse(request.body)
    const { id } = tasks_params_schema.parse(request.params)

    const data = await conclude_task_repository({ id }, { current_date })
    return reply.status(200).send({ message: "Usuário Atualizado", data: data })

}

export { conclude_task_controller }