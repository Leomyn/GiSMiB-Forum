const http = require('http');
const mongodb = require('mongodb');

const hostname = '127.0.0.1'; // localhost
const port = 3000;

const url = 'mongodb://localhost:27017'; // für lokale MongoDB
const mongoClient = new mongodb.MongoClient(url);

let defaultThreads = [
    {
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
    {
        title: "Thread 2",
        author: "Dahlia",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Daniel",
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
    if(!collections.find(collection => collection.name == 'thread')){
        mongoClient.db('forum').collection('thread').insertMany(defaultThreads);
    }
    // listen for requests
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}


const server = http.createServer(async (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.setHeader('Access-Control-Allow-Origin', '*'); // bei CORS Fehler
  const url = new URL(request.url || '', `http://${request.headers.host}`);
  const id = url.searchParams.get('id');
  const threadCollection = mongoClient.db('forum').collection('thread');
  switch (url.pathname) {
    case '/getItems':
        let threads = await threadCollection.find({}).toArray();
        response.write(JSON.stringify(threads));
        break;
    case '/getItem':
        if(id){
            
            let threads = await threadCollection.find({
                _id: new mongodb.ObjectId(id), // von Zahl zu MongoDB ID Objekt konvertieren
            }).toArray();
            response.write(JSON.stringify(threads[0]));
        }
            break;

    case '/setItem':
        if(request.method === 'POST') {
            let jsonString = '';
            request.on('data', (data) => {
                jsonString += data;
            });
            request.on('end', () => {
                let newThread = JSON.parse(jsonString);
                if(newThread._id){ // update
                    newThread._id = mongodb.ObjectId(newThread._id); // von Zahl zu MongoDB ID Objekt konvertieren
                    threadCollection.replaceOne({
                        _id: newThread._id,
                    },
                    newThread);
                }
                else{ // add
                    //newThread.id = new Date().valueOf();
                    threads.push(newThread);
                    threadCollection.insertOne(newThread);
                }
            });
        }
        break;

    default:
        response.statusCode = 404;
  }
  response.end();
});
startServer();
