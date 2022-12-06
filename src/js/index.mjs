/*import * as postMethods from "./api/posts/index.mjs"
import * as templates from "./templates/index.mjs"

async function viewAllPosts() {
    const posts = await postMethods.getPosts();
    const container = document.querySelector("#post");
    templates.renderPostTemplates(posts, container);
}

viewAllPosts()*/

import { regFormListener } from "./handlers/register.mjs";
import { loginFormListener } from "./handlers/login.mjs";
import { createPostFormListener } from "./handlers/createPost.mjs"
import { updateFormListener } from "./handlers/editPost.mjs";
import { updateProfile } from "./handlers/updateProfile.mjs"; 


const path = location.pathname;

if (path === '/pages/profile/register/index.html') {
    regFormListener();
} else if (path === '/index.html') {
    loginFormListener();
} else if (path === '/pages/feed/index.html') {
    createPostFormListener()
} else if (path === '/pages/profile/post/edit/index.html') {
    updateFormListener()
} else if (path === '/pages/profile/edit/index.html') {
    updateProfile()
}