 import { getProfile, updateProfileInfo } from "../api/profile/index.mjs";

import { load } from "../storage/index.mjs";

export async function updateProfile() {
    const form = document.querySelector("#editProfile");

    if (form) {
        const { name, email } = load("profile")
        form.name.value = name;
        form.email.value = email;

        const button = form.querySelector("button");
        button.disabled = true;

        const profile = await getProfile(name);

        form.avatar.value = profile.avatar;
        form.banner.value = profile.banner;

        button.disabled = false;

        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form)
            const profile = Object.fromEntries(formData.entries())

            profile.name = name;
            profile.email = email;

            updateProfileInfo(profile)

            setTimeout(function() {
                window.location.href = "/pages/feed/index.html"
            }, 2000);
        })
    }
};