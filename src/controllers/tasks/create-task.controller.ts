import type { FastifyReply, FastifyRequest } from "fastify";
import { task_body_schema } from "@/utils/schemas/tasks.schema.js";
import { create_task_repository } from "@/repositories/create-task.repository.js";

async function create_task_controller(request: FastifyRequest, reply: FastifyReply) {
    const { name, due_date } = task_body_schema.parse(request.body)

    const data = await create_task_repository({ name, due_date })
    return reply.status(201).send({ message: "Tarefa criada!", data: data })
}

export { create_task_controller }