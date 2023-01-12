const url = 'http://localhost:3000/';
let threads = [];


async function startIndex() {
    await readStorage();
    console.log(threads);
    let container = document.querySelector('ol');
    for (let thread of threads) {
        let html = `
            <li class="row">
                <a href="./thread.html?${thread._id}">
                    <h4 class="title">
                        ${thread.title}
                    </h4>
                    <div class="bottom">
                        <p class="timestamp">
                           Erstellt am: ${new Date(thread.date).toLocaleString()}
                        </p>
                        <p class="comment-count">
                            ${thread.comments.length} comments
                        </p>
                    </div>
                </a>
            </li>
            `
        container.insertAdjacentHTML('beforeend', html);
    }

    
    // let thread = {
    //     _id: '',
    //     title: '',
    //     author: "Daniel",
    //     date: Date.now(),
    //     content: "Thread content",
    //     comments: [

    //     ],
    // }
    
    async function insertThread(newThread) {
        let threadHtml = `
            <li class="row">
                <a href="./thread.html?${newThread._id}">
                    <h4 class="title">
                        ${newThread.title}
                    </h4>
                    <div class="bottom">
                        <p class="timestamp">
                           Erstellt am: ${new Date(newThread.date).toLocaleString()}
                        </p>
                        <p class="comment-count">
                            ${newThread.comments.length} comments
                        </p>
                    </div>
                </a>
            </li>
            `
        container.insertAdjacentHTML('beforeend', threadHtml);
    }

    let btn = document.querySelector('button');
    btn.addEventListener('click', async function () {
        let txt = document.querySelector('textarea');
        let newThread = {
            title: txt.value,
            author: "Daniel",
            date: Date.now(),
            content: "Thread content",
            comments: [
            ]
        }
        insertThread(newThread);
        txt.value = '';
        threads.push(newThread);
        //localStorage.setItem('threads', JSON.stringify(threads));
        //updateStorage(); 
        addThread(newThread);
        window.location.reload();
    })

}
startIndex();

async function readStorage() {
    const response = await fetch(url + 'getItems');
    const text = await response.text(); // Text aus Response Body
    threads = JSON.parse(text);
}

async function addThread(newThread) {
    let serverAnswer = await fetch(url + 'setItem', {
        method: 'post',
        body: JSON.stringify(newThread),
    });
    console.log(await serverAnswer.json());
    return serverAnswer;
}

/*async function updateStorage(){
    //localStorage.setItem('threads', JSON.stringify(defaultThreads));
    fetch(url+'setItems', {
        method: 'post',
        body: JSON.stringify(threads),
    });
}
*/
