        const url = 'http://localhost:3000/';
        let threads = [];
        async function start(){
        await readStorage();
        console.log(Threads);
        let container = document.querySelector('ol');
        for (let thread of Threads) {
            let html = `
            <li class="row">
                <a href="./thread.html?${thread.id}">
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
    

        function addThread() {
            let threadHtml = `
            <li class="row">
                <a href="./thread.html?${thread.id}">
                    <h4 class="title">
                        ${thread.title}
                    </h4>
                    <div class="bottom">
                        <p class="timestamp">
                            ${new Date(thread.date).toLocaleString()}
                        </p>
                        <p class="comment-count">
                            ${thread.comments.length} comments
                        </p>
                    </div>
                </a>
            </li>
            `
            container.insertAdjacentHTML('beforeend', threadHtml);
        }

        let btn = document.querySelector('button');
        btn.addEventListener('click', function() {
            let txt = document.querySelector('textarea');
            let threadId = threads.length+1;
            let thread = { 
            id: threadId,
            title: txt.value,
            author: "Daniel",
            date: Date.now(),
            content: "Thread content",
            comments: [
                {
                    author: "",
                    date: Date.now(),
                    content:"", 
                }
            ]
        }
            addThread(thread);
            txt.value = '';
            threads.push(thread);
            //localStorage.setItem('threads', JSON.stringify(threads));
            updateStorage();
        })


    }
        

        async function readStorage() {
            const response = await fetch(url+'getItems');
            const text = await response.text(); // Text aus Response Body
            threads = JSON.parse(text);
        }
        
        async function updateStorage(){
            //localStorage.setItem('threads', JSON.stringify(defaultThreads));
            fetch(url+'setItems', {
                method: 'post',
                body: JSON.stringify(threads),
            });
        }

        start();