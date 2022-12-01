import { postComment } from "../api/posts/comment.mjs";

export function commentPostFormListener() {
    const commentForm = document.querySelectorAll(".commentPost");
    console.log(commentForm)
    commentForm.forEach((formElement) => {
        if (formElement) {
            commentForm.addEventListener("submit", (event) => {
                event.preventDefault()
                const formElement = event.target;
                const formData = new FormData(formElement)
                const postData = Object.fromEntries(formData.entries())

                postComment(postData)
            });
        };
    });
};