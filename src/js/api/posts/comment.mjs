import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../const.mjs";

const action = "/posts";
const comment = "/comment/"
const method = "post";

export async function postComment(postData) {
    if (!postData.id) {
    throw new Error("To comment on a post, a postID is required")
    };

    const getCommentsPostURL = `${API_SOCIAL_URL}${action}/${postData.id}${comment}`;

    const response = await authFetch(getCommentsPostURL, {
        method: method,
        body: JSON.stringify(postData)
    });

    return await response.json()
};
