import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../const.mjs";

const action = "/posts";
const comment = "/comment"
const method = "post";

export async function postComment(postData, id) {
    if (!id) {
    throw new Error("To get a post, a postID is required")
    }

    const getCommentsPostURL = `${API_SOCIAL_URL}${action}/${id}${comment}` ;
    console.log(getCommentsPostURL)

    const response = await authFetch(getCommentsPostURL, {
        method: method,
        body: JSON.stringify(postData)
    })

    return await response.json()
}