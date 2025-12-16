import { createId } from "@paralleldrive/cuid2";

function create_id(): string {
    return createId()
}

export { create_id }