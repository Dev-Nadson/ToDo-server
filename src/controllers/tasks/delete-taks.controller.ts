import type { FastifyReply, FastifyRequest } from "fastify";
import { tasks_params_schema } from "@/utils/schemas/tasks.schema.js";
import { delete_task_repository } from "@/repositories/delete-task.repository.js";

async function delete_task_controller(request: FastifyRequest, reply: FastifyReply) {
    const { id } = tasks_params_schema.parse(request.params)

    await delete_task_repository({ id })

    return reply.status(204).send()
}

export { delete_task_controller }