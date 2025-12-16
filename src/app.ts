import fastify, { type FastifyInstance } from "fastify";
import { app_routes } from "./routes/index.js";

function create_app(): FastifyInstance {
    const app = fastify()

    app.register(app_routes, { prefix: "/api" })

    return app
}

export { create_app }