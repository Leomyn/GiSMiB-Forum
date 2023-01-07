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
}
    //muss die vorherige vorschau löschen
