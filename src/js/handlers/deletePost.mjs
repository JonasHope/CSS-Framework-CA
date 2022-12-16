import { removePost } from "../api/posts/delete.mjs";

const deleteBtn = document.querySelector("#deleteButton");

export function removingPost() {
    deleteBtn.onclick = function() {
        deletePost()
    }

    async function deletePost() {
        const url = new URL(location.href);
        const id = url.searchParams.get("id");
        await removePost(id)

        setTimeout(function() {
            window.location.href = "../../../feed/"
        }, 1) 
    }
}