import fastify, { type FastifyInstance } from "fastify";

function create_app(): FastifyInstance {
    const app = fastify()

    // app.register()

    return app
}

export { create_app }