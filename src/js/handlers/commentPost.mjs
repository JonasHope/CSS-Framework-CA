import { postComment } from "../api/posts/comment.mjs";

export function commentPostFormListener() {
    const form = document.querySelector(".commentPost");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form)
            const postData = Object.fromEntries(formData.entries())

            postComment(postData)
            
        })
    }
};