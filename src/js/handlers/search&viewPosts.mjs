import * as templates from "../templates/index.mjs"
import * as postMethods from "../api/posts/index.mjs"
import { clearElement } from "./clearPostFeed.mjs";

const searchBar = document.querySelector('#search')

export async function viewAllPosts() {
searchBar.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    let filteredPosts = posts.filter(function(post) {
        return post.body?.includes(value) || post.title.includes(value) || post.author.name.toLowerCase().includes(value)
    })

    const postContainer = document.querySelector('#post')

    clearElement(postContainer)

    templates.renderPostTemplates(filteredPosts, postContainer)
    
});

    let posts = await postMethods.getPosts();
    const postContainer = document.querySelector("#post")
    templates.renderPostTemplates(posts, postContainer)
}