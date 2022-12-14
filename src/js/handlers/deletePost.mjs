import { removePost } from "../api/posts/delete.mjs";

const deleteBtn = document.querySelector("#deleteButton");

export function removingPost() {
    deleteBtn.onclick = function() {
        deletePost()
    }

    function deletePost() {
        const url = new URL(location.href);
        const id = url.searchParams.get("id");
        removePost(id)

        setTimeout(function() {
            window.location.href = "../../../feed/"
        }, 1500) 
    }
}