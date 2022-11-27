import { createPost } from "../api/posts/index.mjs";

export function createPostFormListener () {
    const form = document.querySelector("#createPost");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form)
            const postpost = Object.fromEntries(formData.entries())

            createPost(postpost)
        })
    }
};