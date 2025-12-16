import type { FastifyReply, FastifyRequest } from "fastify";
import { task_body_schema } from "@/utils/schemas/tasks.schema.js";

async function create_task_controller(request: FastifyRequest, reply: FastifyReply) {
    const { name, due_date } = task_body_schema.parse(request.body)

    return reply.status(201).send()
}