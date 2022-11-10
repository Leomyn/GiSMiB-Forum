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

//if(window.location.pathname == ){
let post = document.createElement("div");
post.className = "post";
let image = document.createElement("img");
image.src = "images/smiley.png";
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





