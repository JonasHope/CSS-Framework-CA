import { postComment } from "../api/posts/comment.mjs";

export function postTemplate(postData) {
 
        // All posts

// Post header section
    const post = document.createElement("div");
    const postHeader = document.createElement("div");
    const viewPost = document.createElement("a");
    const image = document.createElement("img");
    const author = document.createElement("strong");
    const postDate = document.createElement("small");
    const postHeaderActions = document.createElement("div")

// Post main content section
    const content = document.createElement("div");
    const title = document.createElement("strong");
    const body = document.createElement("p");
    const postImage = document.createElement("img");
    const tagsContainer = document.createElement("div")

// Create a comment on post section
    const commentContainer = document.createElement("div");
    const commentHeader = document.createElement("h3");

    const commentDiv = document.createElement("div");
    const commentForm = document.createElement("form");
    const commentTextarea = document.createElement("textarea");
    const commentButton = document.createElement("button");

    commentForm.classList.add("commentPost")
    commentDiv.classList.add("my-3", "d-flex", "flex-column", "justify-content-end")
    commentTextarea.classList.add("form-control")
    commentButton.classList.add("btn", "btn-primary", "my-2");

    commentButton.innerText = 'Post'

    commentTextarea.setAttribute('name', 'body')
    commentTextarea.setAttribute('placeholder', 'write comment here')
    commentButton.setAttribute('id', 'commentBtn')
    commentForm.setAttribute('id', postData.id)

    commentContainer.appendChild(commentForm)
    commentDiv.appendChild(commentTextarea)
    commentDiv.appendChild(commentButton)
    commentForm.appendChild(commentDiv)

            if (commentForm) {
                commentForm.addEventListener('submit', (event) => {
                    event.preventDefault()

                    const id = `${postData.id}`
                    const formData = new FormData(commentForm)
                    const post = Object.fromEntries(formData.entries())
                    post.id = id

                    postComment(post);

                    setTimeout(function() {
                    window.location.href = "/pages/feed/index.html"
                    }, 1000);
                })
            }

    post.classList.add("posts", "card", "border-1", "my-5");

    
        //Classes added to elements

// Post header section
    image.classList.add("profileImage-Default", "p-0", "col-6");
    author.classList.add("authorName", "ms-2", "col-8");
    postDate.classList.add("col-12", "text-end", "ms-2")
    postHeader.classList.add("purple", "p-2", "row", "m-0", "align-items-center", "d-flex")
    viewPost.classList.add('text-decoration-none', 'text-black',"me-3")

    
// Post main content section
    content.classList.add("card", "border-0", "px-3", "pt-2");
    title.classList.add("fs-6");
    postImage.classList.add("postImg");
    tagsContainer.classList.add("d-flex")


// Post comment section
    commentContainer.classList.add("row", "align-items-center", "mx-3", "my-3", "p-2", "light-purple");
    commentHeader.classList.add("fs-6", "col-12", "my-2", "text-center");

            // Setting attributes

    image.setAttribute('src', postData.author.avatar);
    image.setAttribute('onerror', 'this.onerror=null;this.src="/images/man-in-suit-and-tie.png";');
    postImage.setAttribute('src', postData.media);
    postImage.setAttribute('onerror', 'this.onerror=null; this.src="/images/placeholder.jpg"');
    viewPost.setAttribute('href', `/pages/profile/post/?id=${postData.id}`)
            
            // Setting innerText

    author.innerText = postData.author.name;
    postDate.innerText = postData.created;
    title.innerText = postData.title;
    body.innerText = postData.body;
    commentHeader.innerText = 'Comments ' + postData.comments.length;
    viewPost.innerText = 'View post';

            // Appending children to parents

    post.appendChild(postHeader);
    postHeader.appendChild(image);
    postHeader.appendChild(author);
    postHeader.appendChild(postDate);
    postHeader.appendChild(postHeaderActions)
    postHeaderActions.appendChild(viewPost)
    post.appendChild(content);
    content.appendChild(title);
    content.appendChild(body);
    content.appendChild(postImage);
    content.appendChild(tagsContainer);
    post.appendChild(commentContainer);
    commentContainer.appendChild(commentHeader);

        // Adding "edit" and "delete" post buttons

    const profileName = JSON.parse(window.localStorage.getItem('profile'))
    if (profileName.name === postData.author.name) {

        const editButton = document.createElement("a");
        editButton.innerText = "Edit"
        editButton.setAttribute('href', `/pages/profile/post/edit/index.html?id=${postData.id}`);
        editButton.classList.add('text-decoration-none', 'text-black',"mx-3")
        postHeaderActions.appendChild(editButton);

        const deleteButton = document.createElement("a");
        deleteButton.innerText = "Delete"
        deleteButton.setAttribute('href', `/pages/profile/post/delete/index.html?id=${postData.id}`);
        deleteButton.classList.add('text-decoration-none', 'text-black',"mx-3")
        postHeaderActions.appendChild(deleteButton);
    }

        // Fix post date

    let dateUpdate = `${postData.created}`;
    let result = dateUpdate.substring(0, 10);
    postDate.innerText = result;

    
        //displaying tags on posts

        const postTags = postData.tags.filter(splitTags => splitTags.length)
        if (postTags.length > 0) {
            const tags = document.createElement("small")
            tags.classList.add("card", "p-1", "m-1", "purple", "border-0")
            tags.innerText = '#' + postTags
            tagsContainer.appendChild(tags)
        }


        // Displaying comments on posts

    const commentsBody = postData.comments;
        commentsBody.map((newBody) => {
        const createImg = document.createElement("img");
        const createName = document.createElement("strong");
        const createComment = document.createElement("small");

        createComment.innerText = newBody.body;
        createName.innerText = newBody.author.name;

        createName.classList.add("fs-6", "col-8");
        createImg.classList.add("profileImage-Comments", "col-4");
        createComment.classList.add("card", "col-12", "border-0", "p-2", "my-2");

        createImg.setAttribute('src', newBody.author.avatar);
        createImg.setAttribute('alt', newBody.author.name);
        createImg.setAttribute('onerror', 'this.onerror=null;this.src="/images/man-in-suit-and-tie.png";');

        commentContainer.appendChild(createImg);
        commentContainer.appendChild(createName);
        commentContainer.appendChild(createComment);
        })
console.log(postData)
    return post;
}

export function renderPostTemplate(postData, parent) {
    parent.append(postTemplate(postData))
}

export function renderPostTemplates(postDataList, parent) {
    parent.append(...postDataList.map(postTemplate))
}