import type { FastifyReply, FastifyRequest } from "fastify";
import { tasks_params_schema } from "@/utils/schemas/tasks.schema.js";
import { get_task_repository } from "@/repositories/get-task.repository.js";

async function get_tasks_controller(request: FastifyRequest, reply: FastifyReply) {
    const { id } = tasks_params_schema.parse(request.params)

    const data = await get_task_repository({ id })

    return reply.status(200).send({ message: "Dados da atividade", data: data })
}

export { get_tasks_controller }