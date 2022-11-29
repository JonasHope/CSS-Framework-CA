import * as postMethods from "./api/posts/index.mjs"
import { renderPostTemplate } from "./templates/index.mjs";

async function viewPost() {
    const params = new URLSearchParams(document.location.search)
    const id = params.get("id")

    const posts = await postMethods.getPost(id);
    const container = document.querySelector("#specificPost");
    renderPostTemplate(posts, container);
    }

viewPost()