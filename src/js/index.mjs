// Register account and login

import { regFormListener } from "./handlers/register.mjs";
import { loginFormListener } from "./handlers/login.mjs";
import { createPostFormListener } from "./handlers/createPost.mjs"
import { updateFormListener } from "./handlers/editPost.mjs";
import { commentPostFormListener } from "./handlers/commentPost.mjs"

const path = location.pathname;

if (path === '/pages/profile/register/') {
    regFormListener();
} else if (path === '/index.html') {
    loginFormListener();
} else if (path === '/pages/feed/index.html') {
    createPostFormListener()
} else if (path === '/pages/profile/post/edit/') {
    updateFormListener()
} else if (path === `/pages/feed/index.html`) {
    commentPostFormListener()
    console.log(commentPostFormListener)
}
