import * as templates from "../templates/index.mjs"
import * as postMethods from "../api/posts/index.mjs"
import { clearElement } from "./clearPostFeed.mjs";

// sort after Old posts

const sortOld = document.querySelector("#oldPosts")

export function filterPostsByOld() {
    sortOld.onclick = function() {
        sortPostsByOld()
    };

    async function sortPostsByOld() {
        const postContainer = document.querySelector("#post")
        
        clearElement(postContainer)

        let posts = await postMethods.getSortedPostsOld();
        templates.renderPostTemplates(posts, postContainer)
    }
}

// sort after New posts

const sortNew = document.querySelector("#newPosts")

export function filterPostsByNew(){
    sortNew.onclick = function() {
        sortPostsByNew()
    };
    
    async function sortPostsByNew() {
        const postContainer = document.querySelector("#post")

        clearElement(postContainer)
    
        let posts = await postMethods.getSortedPostsNew();
        templates.renderPostTemplates(posts, postContainer)
    }
}