const http = require('http');
const mongodb = require('mongodb');

const hostname = '127.0.0.1'; // localhost
const port = 3000;

const url = 'mongodb://localhost:27017'; // für lokale MongoDB
const mongoClient = new mongodb.MongoClient(url);

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
            },
        ]
    },
]


async function startServer() {
    // connect to database
    await mongoClient.connect();
    // optional: defaultItems einfügen, wenn Collection noch nicht existiert
    let collections = await mongoClient.db('forum').listCollections().toArray();
    if(!collections.find(collection => collection.name == 'item')){
        mongoClient.db('forum').collection('threads').insertMany(defaultThreads);
    }
    // listen for requests
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}


const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.setHeader('Access-Control-Allow-Origin', '*'); // bei CORS Fehler
  const url = new URL(request.url || '', `http://${request.headers.host}`);
  switch (url.pathname) {
    case '/getItems':
        response.write(JSON.stringify(threads));
        break;
    case '/setItems':
        if(request.method === 'POST') {
            let jsonString = '';
            request.on('data', (data) => {
                jsonString += data;
            });
            request.on('end', () => {
                threads = JSON.parse(jsonString);
            });
        }
    default:
        response.statusCode = 404;
  }
  response.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});