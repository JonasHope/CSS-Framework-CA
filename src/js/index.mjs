// Register account and login

import { regFormListener } from "./handlers/register.mjs";
import { loginFormListener } from "./handlers/login.mjs";

const path = location.pathname;

if (path === '/pages/profile/register/') {
    regFormListener();
} else if (path === '/index.html') {
    loginFormListener();
}

import * as post from "./api/posts/index.mjs"

/*post.createPost()
post.updatePost()
post.updatePost()
post.getPost()*/
//post.getPosts().then(console.log)

post.getPost(3939).then(console.log)


/*

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



// Delete a post

import { removePost } from "./api/posts/delete.mjs";

removePost(3938)

*/