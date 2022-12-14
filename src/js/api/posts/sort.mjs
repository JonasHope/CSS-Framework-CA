import { authFetch } from "../authFetch.mjs";
import { API_POST_REVERSE, API_POST_SORT, API_SOCIAL_URL, API_SOCIAL_URL_AUTHOR } from "../const.mjs";

const action = "/posts";

export async function getSortedPostsOld() {

    const sortedPostsOldURL = `${API_SOCIAL_URL}${action}${API_SOCIAL_URL_AUTHOR}${API_POST_REVERSE}`;

    const response = await authFetch(sortedPostsOldURL)

    return await response.json()
}

export async function getSortedPostsNew() {

    const sortedPostsNewURL = `${API_SOCIAL_URL}${action}${API_SOCIAL_URL_AUTHOR}${API_POST_SORT}`;

    const response = await authFetch(sortedPostsNewURL)

    return await response.json()
}