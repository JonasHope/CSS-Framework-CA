import { register } from "../account/register.mjs";

export function registerForm() {
    const form = document.querySelector("#regForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new formData(form)
            const profile = Object.fromEntries(formData.entries())

            register(profile)
        })
    }
}