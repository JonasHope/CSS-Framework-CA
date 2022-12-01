import { commentPostFormListener } from "../handlers/commentPost.mjs";
commentPostFormListener()


export function postTemplate(postData) {

// All posts
    const post = document.createElement("div");
    const postHeader = document.createElement("div");
    const viewPost = document.createElement("a");
    const image = document.createElement("img");
    const author = document.createElement("strong");
    const postDate = document.createElement("small");
    const content = document.createElement("div");
    const title = document.createElement("strong");
    const body = document.createElement("p");
    const postImage = document.createElement("img");
    const commentContainer = document.createElement("div");
    const commentHeader = document.createElement("h3");
    const commentForm = document.createElement("form");
    const commentTextarea = document.createElement("textarea");
    const commentButton = document.createElement("button");
    const commentDiv = document.createElement("div");

    post.classList.add("posts", "card", "border-1", "my-5");
    image.classList.add("profileImage-Default", "p-0", "col-6");
    author.classList.add("ms-2", "col-8");
    postDate.classList.add("col-12", "text-end", "ms-2")
    postHeader.classList.add("purple", "p-2", "row", "m-0", "align-items-center")
    content.classList.add("card", "border-0", "px-3", "pt-2");
    title.classList.add("fs-6");
    postImage.classList.add("postImg");
    commentContainer.classList.add("row", "align-items-center", "mx-3", "my-3", "p-2", "light-purple");
    commentHeader.classList.add("fs-6", "col-12", "my-2", "text-center");
    commentForm.classList.add("commentPost")
    commentDiv.classList.add("my-3", "d-flex", "flex-column", "justify-content-end")
    commentTextarea.classList.add("form-control")
    commentButton.classList.add("btn", "btn-primary", "my-2");
    
    image.setAttribute('src', postData.author.avatar);
    image.setAttribute('onerror', 'this.onerror=null;this.src="/images/man-in-suit-and-tie.png";');
    postImage.setAttribute('src', postData.media);
    postImage.setAttribute('onerror', 'this.onerror=null; this.src="/images/placeholder.jpg"');
    viewPost.setAttribute('href', `/pages/profile/post/?id=${postData.id}`)
    commentTextarea.setAttribute('name', 'body')
    commentTextarea.setAttribute('placeholder', 'write comment here')
    commentButton.setAttribute('id', 'commentBtn')

    author.innerText = postData.author.name;
    postDate.innerText = postData.created;
    title.innerText = postData.title;
    body.innerText = postData.body;
    commentHeader.innerText = 'Comments ' + postData.comments.length;
    viewPost.innerText = 'View post';
    commentButton.innerText = 'Post'

    post.appendChild(postHeader);
    postHeader.appendChild(image);
    postHeader.appendChild(author);
    postHeader.appendChild(postDate);
    postHeader.appendChild(viewPost)

    const profileName = JSON.parse(window.localStorage.getItem('profile'))
    console.log(profileName.name)
        if (profileName.name === postData.author.name) {
        const editButton = document.createElement("a");
        editButton.innerText = "Edit post"
        editButton.setAttribute('href', "/pages/profile/post/edit/");
        postHeader.appendChild(editButton);
    }
    post.appendChild(content);
    content.appendChild(title);
    content.appendChild(body);
    content.appendChild(postImage);
    post.appendChild(commentContainer);
    commentContainer.appendChild(commentHeader);
    commentContainer.appendChild(commentForm)
    commentDiv.appendChild(commentTextarea)
    commentDiv.appendChild(commentButton)
    commentForm.appendChild(commentDiv)

// Fix post date

    let dateUpdate = `${postData.created}`;
    let result = dateUpdate.substring(0, 10);
    postDate.innerText = result;


// Comments for all posts

    const commentsBody = postData.comments;
    const bodyElement = commentsBody.map((newBody) => {
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

    //console.log(postData)
    return post;
}


export function renderPostTemplate(postData, parent) {
    parent.append(postTemplate(postData))
}

export function renderPostTemplates(postDataList, parent) {
    parent.append(...postDataList.map(postTemplate))
}