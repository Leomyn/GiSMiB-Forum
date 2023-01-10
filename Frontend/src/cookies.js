/*
let defaultThreads = [
    {
        id: "1",
        title: "Thread 1",
        author: "Daniel",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Dahlia",
                date: Date.now(),
                content: "Dies soll ein Kommentar sein"
            }
        ]
    },
]

let threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}
*/