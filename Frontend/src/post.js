/*
let post = document.createElement("div");
post.className = "post";
let image = document.createElement("img");
image.src = "images/clownsmiley.png";
let h3 = document.createElement("h3");
h3.textContent = "Titel des Forum-Beitrags";
let p = document.createElement("p");
p.textContent = "Dies sind die ersten Worte vom Javascript erzeugten Beitrag...";
let a = document.createElement("a");
a.href = "/post.html";
let div = document.createElement("div");
div.textContent= "Mehr lesen";
a.append(div);
let main = document.createElement("main");
document.body.insertBefore(main,footer);
main.append(post);
post.append(image);
post.append(h3);
post.append(p);
post.append(a);
let hr = document.createElement("hr");
document.body.insertBefore(hr,main);
*/

const entries = [{
    User : "",
    Title: "",
    content: "",
    likes: 0,
    comments: [
        {
            User:"",
            content:"",
            likes:0,
        },{
            User:"",
            content:"",
            likes:0,
          }
    ]
},{
    User : "",
    Title: "",
    content: "",
    likes: 0,
    comments: [
        {
            User:"",
            content:"",
            likes:0,
        },{
            User:"",
            content:"",
            likes:0,
          }
    ]
}]

/*const comment = {
    User:"",
    content:"",
    likes:0,
}

const subcomment = {
    User:"",
    content:"",
    likes:0,
}
*/

//erstellen von comments
let sendComment = document.getElementById("sendComment");
sendComment.addEventListener("click",createComment)
function createComment(event){
    let content = document.getElementById("comment").value;
    let comment = document.createElement("div");
    comment.className = "comment";
    let image = document.createElement("img");
    image.src= "images/clownsmiley.png";
    let User = document.createElement("h3");
    User.textContent = "User";
    let likebutton = document.createElement("button");
    likebutton.textContent= "Gefällt mir";
    let p = document.createElement("p");
    p.textContent = content;
    let input = document.createElement("textarea");
    input.id = ""
    comment.append(image);
    comment.append(User);
    comment.append(p);
    comment.append(likebutton);
    document.body.appendChild(comment);
}

//erstellen von Subcomments