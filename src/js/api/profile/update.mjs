import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../const.mjs";

const action = "/profiles";
const method = "put";

export async function updateProfileInfo(profileData) {
    if (!profileData.name) {
        throw new Error("update requires a name")
    }
    const updateProfileURL = `${API_SOCIAL_URL}${action}/${profileData.name}/media`;

    const response = await authFetch(updateProfileURL, {
        method: method,
        body: JSON.stringify(profileData)
    })

    return await response.json()
}