//Erstellen von gleichbleibenden Elementen
let footer = document.createElement("footer");
footer.textContent = "Diese Seite wurde erstellt von Daniel Kelesov";
document.body.append(footer);

let header = document.createElement("header");
let h1 = document.createElement("h1");
h1.textContent = "Forum für Allerlei";
header.append(h1);
document.body.insertBefore(header, document.body.firstChild);

let nav = document.createElement("nav");
nav.id = "nav";
header.append(h1, nav);
let title = ["Start", "Beiträge", "Beitrag erstellen","Konto"];
let href = ["/index.html", "/posts.html", "/createpost.html", "/account.html"];
for(i in title){
    let navItem;
    if(window.location.pathname == href[i]){
        navItem = document.createElement("strong");
    }
    else {
        navItem = document.createElement("a");
        navItem.href = "."+href[i];
    }
    navItem.className = "navItem";
    navItem.textContent = title[i];
    nav.appendChild(navItem);
}

/*da der Post-div-Block out of place auf anderen Seiten
wirkt, dachte ich dass man mit window und einer if aussage
bestimmen kann dass er nur auf der index seite und auf der
Seite sehen kann. */   
//if(window.location.pathname == /posts.html  && window.location.pathname == /index.html){
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
//}

/*
//übung aus der vorlesung
let button = document.createElement("button");
main.append(button);
button.addEventListener("click",createHallo)

function createHallo(event){
    let p = document.createElement("p");
    p.textContent="Hallo"
    main.append(p);
}
*/


let previewButton = document.getElementById("preview");
previewButton.addEventListener("click",createPreview);
function createPreview(){
    let titel = document.getElementById("title").value;
    let content = document.getElementById("entryContent").value;
    let post = document.createElement("div");
    post.className = "post";
    let image = document.createElement("img");
    image.src = "images/clownsmiley.png";
    let h3 = document.createElement("h3");
    h3.textContent = titel;
    let p = document.createElement("p");
    p.textContent = content;
    let main = document.createElement("main");
    document.body.insertBefore(main,footer);
    main.append(post);
    post.append(image);
    post.append(h3);
    post.append(p);
    let hr = document.createElement("hr");
    document.body.insertBefore(hr,main);
    //muss die vorherige vorschau löschen
    //createPost kann auf dasselbe prinzip createt werden
}

const entry = {
    User : "",
    Title: "",
    content: "",
    likes: 0,
}

const comment = {
    User:"",
    content:"",
    likes:0,
}

const subcomment = {
    User:"",
    content:"",
    likes:0,
}

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

//Scripte auf die jeweiligen Seiten umschreiben und verlagern sonst herrscht Chaos
//HeaderFooter, post, posts und createPost brauchen jeweils separate scripts