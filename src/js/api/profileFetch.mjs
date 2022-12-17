import { userProfile } from "../storage/index.mjs"

export function validation() {
    const profile = userProfile("profile");

    return {
        "Content-Type": "application/json",
        "Authorization": `bearer ${profile}`
    }
}

export async function profileFetch(url, options = {}) {
    return fetch(url, {
        ...options,
        validation: validation()
    })
}