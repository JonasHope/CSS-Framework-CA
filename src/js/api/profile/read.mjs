import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../const.mjs";

const action = "/profiles";

export async function getProfiles() {
    const updateProfileURL = `${API_SOCIAL_URL}${action}`;

    const response = await authFetch(updateProfileURL)

    return await response.json()
}

export async function getProfile(name) {
    if (!name) {
    throw new Error("To get a Profile, a name is required")
    }

    const getProfileURL = `${API_SOCIAL_URL}${action}/${name}`;

    const response = await authFetch(getProfileURL)

    return await response.json()
}