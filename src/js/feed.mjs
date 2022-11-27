import * as postMethods from "./api/posts/index.mjs"
import * as templates from "./templates/index.mjs"

async function testTemplate() {
    const posts = await postMethods.getPosts();
    const container = document.querySelector("#post");
    templates.renderPostTemplates(posts, container);
}

testTemplate()