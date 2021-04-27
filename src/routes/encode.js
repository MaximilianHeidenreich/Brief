import { encodeUnicode } from "../../lib/unicode";

export async function post({ body }) {
    const { message } = body;

    if (message === undefined) return { status: 400 }

    const encoded = encodeUnicode(message);

    return {
        body: {
            data: encoded
        }
    };
}