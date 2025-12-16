import type { FastifyInstance } from "fastify";
import { list_tasks_controller } from "@/controllers/tasks/list-tasks.controller.js";

async function tasks_routes(app: FastifyInstance) {
    app.get("/", list_tasks_controller)
    app.get("/:id", () => { })
    app.post("/", () => { })
    app.post("/:id", () => { })
    app.patch("/:id", () => { }) //status
    app.delete("/:id", () => { })
}

export { tasks_routes }