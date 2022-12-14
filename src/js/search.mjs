import * as templates from "./templates/index.mjs"
import * as postMethods from "./api/posts/index.mjs"

const searchBar = document.querySelector('#search')

searchBar.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    let filteredPosts = posts.filter(function(post) {
        return post.body?.includes(value) || post.title.includes(value) || post.author.name.toLowerCase().includes(value)
    })

    const postContainer = document.querySelector('#post')

    function clearElement(element) {
        while (element.lastElementChild) {
        element.removeChild(element.lastElementChild);
        }
    }

    clearElement(postContainer)

    templates.renderPostTemplates(filteredPosts, postContainer)
    
});

let posts = await postMethods.getPosts();
const postContainer = document.querySelector("#post")
templates.renderPostTemplates(posts, postContainer)



const sortOld = document.querySelector("#oldPosts")

sortOld.onclick = function() {
    sortPostsByOld()
};

async function sortPostsByOld() {

    function clearElement(element) {
        while (element.lastElementChild) {
        element.removeChild(element.lastElementChild);
        }
    }
    const postContainer = document.querySelector("#post")
    clearElement(postContainer)

    let posts = await postMethods.getSortedPostsOld();
    templates.renderPostTemplates(posts, postContainer)
}



const sortNew = document.querySelector("#newPosts")

sortNew.onclick = function() {
    sortPostsByNew()
};

async function sortPostsByNew() {

    function clearElement(element) {
        while (element.lastElementChild) {
        element.removeChild(element.lastElementChild);
        }
    }
    const postContainer = document.querySelector("#post")
    clearElement(postContainer)

    let posts = await postMethods.getSortedPostsNew();
    templates.renderPostTemplates(posts, postContainer)
}