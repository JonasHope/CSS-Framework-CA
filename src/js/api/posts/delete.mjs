import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../const.mjs";

const action = "/posts";
const method = "delete";

export async function removePost(id) {
    if (!id) {
        throw new Error("To delete a post, a postID is required")
    }
    const updatePostURL = `${API_SOCIAL_URL}${action}/${id}`;

    const response = await authFetch(updatePostURL, {
        method: method
    })

    return await response.json()
}