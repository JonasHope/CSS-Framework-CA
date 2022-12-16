import { regFormListener } from "./handlers/register.mjs";
import { loginFormListener } from "./handlers/login.mjs";
import { createPostFormListener } from "./handlers/createPost.mjs"
import { updateFormListener } from "./handlers/editPost.mjs";
import { updateProfile } from "./handlers/updateProfile.mjs"; 
import { removingPost } from "./handlers/deletePost.mjs";
import { viewPost } from "./handlers/specificPost.mjs";
import { viewAllPosts } from "./handlers/search&viewPosts.mjs";
import { filterPostsByNew, filterPostsByOld } from "./handlers/filterPosts.mjs";

const path = location.pathname;

if (path === '/pages/profile/register/' || path === '/pages/profile/register/index.html') {
    regFormListener();
} else if (path === '/index.html' || path === '/') {
    loginFormListener();
} else if (path === '/pages/feed/index.html' || path === '/pages/feed/') {
    createPostFormListener()
    viewAllPosts()
    filterPostsByOld()
    filterPostsByNew()
} else if (path === '/pages/profile/post/edit/index.html' || path === '/pages/profile/post/edit/') {
    updateFormListener()
} else if (path === '/pages/profile/edit/index.html' || path === '/pages/profile/edit/') {
    updateProfile()
} else if (path === '/pages/profile/post/delete/index.html' || path === '/pages/profile/post/delete/') {
    removingPost()
} else if (path === '/pages/profile/post/' || path === '/pages/profile/post/index.html') {
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