import { updatePost } from "../api/posts/index.mjs";

export function loginFormListener () {
    const form = document.querySelector("#updatePost");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form)
            const post = Object.fromEntries(formData.entries())

            updatePost(post)
        })
    }
};