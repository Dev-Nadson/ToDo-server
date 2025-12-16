import type { FastifyInstance } from "fastify";
import { list_tasks_controller } from "@/controllers/tasks/list-tasks.controller.js";
import { get_tasks_controller } from "@/controllers/tasks/get-task.controller.js";
import { create_task_controller } from "@/controllers/tasks/create-task.controller.js";
import { update_task_controller } from "@/controllers/tasks/update-task.controller.js";
import { conclude_task_controller } from "@/controllers/tasks/conclude-task.controller.js";
import { delete_task_controller } from "@/controllers/tasks/delete-taks.controller.js";

async function tasks_routes(app: FastifyInstance) {
    app.get("/", list_tasks_controller)
    app.get("/:id", get_tasks_controller)
    app.post("/", create_task_controller)
    app.put("/:id", update_task_controller)
    app.patch("/:id", conclude_task_controller)
    app.delete("/:id", delete_task_controller)
}

export { tasks_routes }