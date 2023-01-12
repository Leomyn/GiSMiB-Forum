        const url = 'http://localhost:3000/';
        let threads = [];
        
        
        async function startIndex(){
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
    

        let thread = { 
            _id: '',
            title: '',
            author: "Daniel",
            date: Date.now(),
            content: "Thread content",
            comments: [
                
            ],
        }

        async function insertThread() {
            let threadHtml = `
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
            container.insertAdjacentHTML('beforeend', threadHtml);
        }

        let btn = document.querySelector('button');
        btn.addEventListener('click',async function() {
            let txt = document.querySelector('textarea');
            let threadId = threads.length+1;
            let newThread = { 
            _id: threadId,
            title: txt.value,
            author: "Daniel",
            date: Date.now(),
            content: "Thread content",
            comments: [
            ]
        }
            insertThread(thread);
            txt.value = '';
            await addThread(newThread);
            threads.push(thread);
            //localStorage.setItem('threads', JSON.stringify(threads));
            //updateStorage(); 
            //await addThread(newThread);
        })
        
    }
        startIndex();

        async function readStorage() {
            const response = await fetch(url+'getItems');
            const text = await response.text(); // Text aus Response Body
            threads = JSON.parse(text);
        }
        
        async function addThread(newThread){
            fetch(url+'setItem', {
                method: 'post',
                body: JSON.stringify(newThread),
            });
        }

        /*async function updateStorage(){
            //localStorage.setItem('threads', JSON.stringify(defaultThreads));
            fetch(url+'setItems', {
                method: 'post',
                body: JSON.stringify(threads),
            });
        }
        */
        