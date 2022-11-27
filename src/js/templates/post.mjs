export function postTemplate(postData) {

    const post = document.createElement("div");
    post.classList.add("posts", "card", "border-0", "my-2", "p-3");

    const postHeader = document.createElement("div");
    postHeader.classList.add("gray", "p-3", "m-2")
    post.appendChild(postHeader);

    const image = document.createElement("img");
    image.classList.add("profileImage-Default");
    image.setAttribute('src', postData.author.avatar);
    image.setAttribute('onerror', 'this.onerror=null;this.src="/images/man-in-suit-and-tie.png";');

    postHeader.appendChild(image);

    const author = document.createElement("strong");
    author.classList.add("ms-2" );
    author.innerText = postData.author.name;

    postHeader.appendChild(author);

    const content = document.createElement("div");
    content.classList.add("card", "border-0", "mt-0", "p-2");

    post.appendChild(content);

    const title = document.createElement("strong");
    title.innerText = postData.title;
    title.classList.add("fs-6");

    content.appendChild(title);

    const body = document.createElement("p");
    body.classList.add("my-3", "p-3");
    body.innerText = postData.body;

    content.appendChild(body);

    const postImage = document.createElement("img");
    postImage.setAttribute('src', postData.media);
    postImage.setAttribute('onerror', 'this.onerror=null; this.src="/images/placeholder.jpg"');

    content.appendChild(postImage)


    const commentContainer = document.createElement("div")
    commentContainer.classList.add("row","align-items-center", "m-2", "p-3", "gray")
    post.appendChild(commentContainer)

    const commentHeader = document.createElement("h3")
    commentHeader.innerText = 'Comments'
    commentHeader.classList.add("fs-4", "col-12", "mb-4")
    commentContainer.appendChild(commentHeader)


    const commentsBody = postData.comments;
    const bodyElement = commentsBody.map((newBody) => {
        const createImg = document.createElement("img")
        const createName = document.createElement("strong")
        const createComment = document.createElement("small")
        createComment.innerText = newBody.body
        createName.innerText = newBody.author.name;
        createName.classList.add("fs-6", "col-8")
        createImg.classList.add("profileImage-Comments", "col-4");
        createComment.classList.add("card", "col-11", "border-0", "p-2", "m-2", "my-2")
        createImg.setAttribute('src', newBody.author.avatar)
        createImg.setAttribute('alt', newBody.author.name)
        createImg.setAttribute('onerror', 'this.onerror=null;this.src="/images/man-in-suit-and-tie.png";');
        commentContainer.appendChild(createImg)
        commentContainer.appendChild(createName)
        commentContainer.appendChild(createComment)
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