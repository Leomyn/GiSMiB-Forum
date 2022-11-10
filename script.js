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


