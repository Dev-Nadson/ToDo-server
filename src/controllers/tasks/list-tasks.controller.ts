import type { FastifyReply, FastifyRequest } from "fastify";
import { pagination_schema } from "@/utils/schemas/pagination.schema.js";
import { list_tasks_repository } from "@/repositories/list-tasks.repository.js";

async function list_tasks_controller(request: FastifyRequest, reply: FastifyReply) {
    const { page, limit } = pagination_schema.parse(request.params)

    const data = await list_tasks_repository({ page, limit })

    return reply.status(200).send({ message: "Atividades Pendentes", data: data })
}

export { list_tasks_controller }