import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../const.mjs";

const action = "/posts";
const method = "post";

/**
 * This will create a post, function sends POST request to API server
 * @param {object} postData data you are sending
 * @returns {object} The created post is returned
 * @example
 * ```js
 * // Use this function to send data as POST to API server.
 * ```
 */
export async function createPost(postData) {
    const createPostURL = API_SOCIAL_URL + action;
    postData.tags = postData.tags.split(",").filter(Boolean)
    const response = await authFetch(createPostURL, {
        method: method,
        body: JSON.stringify(postData)
    })

    if (response.ok) {
        return await response.json()
    } else {
        alert("Something went wrong, probably invalid media URL. Please try again")
    }
}