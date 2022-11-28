import * as postMethods from "./api/posts/index.mjs"
import * as templates from "./templates/index.mjs"
import { renderPostTemplate } from "./templates/index.mjs";

async function testTemplate() {
const posts = await postMethods.getPosts();
const post = posts.pop()
const container = document.querySelector("#specificPost");
renderPostTemplate(post, container);
}

testTemplate()