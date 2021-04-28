import { encodeUnicode } from "../../lib/unicode";

export async function post({ body }) {
    const { message } = body;

    // Return err or encoded data
    if (message === undefined) return { status: 400 }
    const encoded = encodeUnicode(message);
    
    return {
        body: {
            data: encoded
        }
    };
}