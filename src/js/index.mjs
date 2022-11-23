// Register account and login

import { regFormListener } from "./handlers/register.mjs";
import { loginFormListener } from "./handlers/login.mjs";

const path = location.pathname;

if (path === '/pages/profile/register/') {
    regFormListener();
} else if (path === '/index.html') {
    loginFormListener();
}



// Create a post

import { createPost } from "./api/posts/create.mjs";

createPost({
    title: "example title",
    body: "example body"
})



// Update a post

import { updatePost } from "./api/posts/update.mjs";

updatePost({
    id: 3938,
    title: "new example title",
    body: "updated body example"
})