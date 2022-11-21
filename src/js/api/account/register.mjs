import { API_SOCIAL_URL } from "../const.mjs";

const nyBruker = "/account/register";
const method = "post";

export async function register(profile) {
    const regURL = API_SOCIAL_URL + nyBruker;
    const body = JSONstringify(profile);

    const response = await fetch(regURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body
    })

    const result = await response.json()
    console.log(result);
}