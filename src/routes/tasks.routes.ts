import type { FastifyInstance } from "fastify";
import { list_tasks_controller } from "@/controllers/tasks/list-tasks.controller.js";
import { get_tasks_controller } from "@/controllers/tasks/get-task.controller.js";

async function tasks_routes(app: FastifyInstance) {
    app.get("/", list_tasks_controller)
    app.get("/:id", get_tasks_controller)
    app.post("/", () => { })
    app.put("/:id", () => { })
    app.patch("/:id", () => { }) //status
    app.delete("/:id", () => { })
}

export { tasks_routes }