import { createPost } from "../api/posts/create.mjs";

export function createPostFormListener () {
    const form = document.querySelector("#createPost");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form)
            const postData = Object.fromEntries(formData.entries())

            createPost(postData)

            setTimeout(function() {
                window.location.href = "/pages/feed/index.html"
            }, 1000);
            
        })
    }
};