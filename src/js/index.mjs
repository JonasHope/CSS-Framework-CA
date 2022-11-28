// Register account and login

import { regFormListener } from "./handlers/register.mjs";
import { loginFormListener } from "./handlers/login.mjs";
import { createPostFormListener } from "./handlers/createPost.mjs"
import { updateFormListener } from "./handlers/editPost.mjs";

const path = location.pathname;

if (path === '/pages/profile/register/') {
    regFormListener();
} else if (path === '/index.html') {
    loginFormListener();
} else if (path === '/pages/feed/index.html') {
    createPostFormListener()
} else if (path === '/pages/profile/post/edit/') {
    updateFormListener()
}


/*
import * as templates from "./templates/index.mjs"

async function testTemplate() {
    const posts = await postMethods.getPosts();
    const container = document.querySelector("#post");
    templates.renderPostTemplates(posts, container);
}

testTemplate()*/