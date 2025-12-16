import type { FastifyInstance } from "fastify";
import { tasks_routes } from "./tasks.routes.js";

async function app_routes(app: FastifyInstance) {
    app.register(tasks_routes, { prefix: "/tasks" })
}

export { app_routes }