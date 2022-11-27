import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../const.mjs";

const action = "/posts";
const method = "post";

export async function createPost(postData) {
    const createPostURL = API_SOCIAL_URL + action;
    postData.tags = postData.tags.split(",")
    const response = await authFetch(createPostURL, {
        method: method,
        body: JSON.stringify(postData)
    })

    return await response.json()
}