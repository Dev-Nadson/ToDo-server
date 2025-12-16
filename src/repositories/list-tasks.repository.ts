import z from "zod";
import { Knex } from "@/database/knex.config.js";
import type { pagination_schema } from "@/utils/schemas/pagination.schema.js";

type PaginationType = z.infer<typeof pagination_schema>

async function list_tasks_repository({ page, limit }: PaginationType) {
    const offset = limit * (page - 1)

    const [count, data] = await Promise.all([
        Knex("tasks").count("* as total").first(),
        Knex("tasks as t").select("*").limit(limit).offset(offset).orderBy("t.created_at", "desc")
    ])

    const total = Number(count?.total ?? 0)
    const total_pages = Math.ceil(total / limit)

    return {
        pagination: { page, limit, total, total_pages },
        data: data
    }
}

export { list_tasks_repository }