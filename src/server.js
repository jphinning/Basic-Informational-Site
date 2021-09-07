//1934536673:AAGn2s27f-iFQqjSwthIe8DEWkTrUDLqzCo => Bot token

const http = require("http")
const fs = require('fs')

const books = JSON.stringify([
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { title: "The Prophet", author: "Kahlil Gibran", year: 1923 }
]);

const authors = JSON.stringify([
  { name: "Paulo Coelho", countryOfBirth: "Brazil", yearOfBirth: 1947 },
  { name: "Kahlil Gibran", countryOfBirth: "Lebanon", yearOfBirth: 1883 }
]);

const options = {
  hostname: 'localhost',
  port: 8000,
  publicDir: __dirname + "/../pub/index.html"
} 

const requestListener = (req, res) => {
  fs.readFile(options.publicDir, (err, data) => {
    if(err){
      res.writeHead(500)
      res.end(err)
      return
    }
    
    if(req.url === "/books"){
      res.writeHead(200);
      res.end(books);
    }
    else if(req.url === "/authors"){
      res.writeHead(200);
      res.end(authors);
    }
    else if(req.url === "/"){
      res.writeHead(200);
      res.end(data);
    }
    else{
      res.writeHead(404);
      res.end(JSON.stringify({error:"Resource not found"}));
    }
    

  })

}

const server = http.createServer(requestListener)

server.listen(options.port, options.hostname, () => {
  console.log(options.publicDir + "All working")
})