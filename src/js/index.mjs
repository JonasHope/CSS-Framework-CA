import { regFormListener } from "./handlers/register.mjs";
import { loginFormListener } from "./handlers/login.mjs";
import { createPostFormListener } from "./handlers/createPost.mjs"
import { updateFormListener } from "./handlers/editPost.mjs";
import { updateProfile } from "./handlers/updateProfile.mjs"; 
import { removingPost } from "./handlers/deletePost.mjs";
import { viewPost } from "./handlers/specificPost.mjs";

const path = location.pathname;

if (path === '/pages/profile/register/') {
    regFormListener();
} else if (path === '/index.html') {
    loginFormListener();
} else if (path === '/pages/feed/index.html' || path === '/pages/feed/') {
    createPostFormListener()
} else if (path === '/pages/profile/post/edit/index.html') {
    updateFormListener()
} else if (path === '/pages/profile/edit/index.html') {
    updateProfile()
} else if (path === '/pages/profile/post/delete/index.html') {
    removingPost()
} else if (path === '/pages/profile/post/') {
    viewPost()
}


// logout function
const logout = document.querySelector("#logoutBtn");

logout.onclick = function() {
    clearStorage()
};

function clearStorage() {
    localStorage.clear()
}