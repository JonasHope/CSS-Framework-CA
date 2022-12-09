import * as templates from "./templates/index.mjs"
import * as postMethods from "./api/posts/index.mjs"

const searchBar = document.querySelector('#search')

searchBar.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    let filteredPosts = posts.filter(function(post) {

        return post.body?.includes(value) || post.title.includes(value) || post.author.name.includes(value)

       /* const postBody = post.body && post.body.includes(value)
        const postTitle = post.title.includes(value)
        const postAuthor = post.author.name.includes(value)
            return postBody || postTitle || postAuthor*/
    })

    const postContainer = document.querySelector('#post')

    function clearElement(element) {
        while (element.lastElementChild) {
        element.removeChild(element.lastElementChild);
        }
    }

    clearElement(postContainer)
    console.clear()

    templates.renderPostTemplates(filteredPosts, postContainer)
    
});

    let posts = await postMethods.getPosts();
    const postContainer = document.querySelector("#post")
    templates.renderPostTemplates(posts, postContainer)
