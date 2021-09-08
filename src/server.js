//1934536673:AAGn2s27f-iFQqjSwthIe8DEWkTrUDLqzCo => Bot token

//Standart
const http = require("http")
const fs = require('fs')

//My files
const {options} = require('./jsonObjects')

// function handleReq(requestURL){
//   fs.readFile(options[requestURL], (err, data) => {
//     if(err){
//       res.writeHead(500)
//       res.end(err)
//       return
//     }
//     res.writeHead(200)
//     res.end(data)
//   })
// }

// const reqURLs = {
//   '/': handleReq('index'),
//   '/about': handleReq('about'),
//   '/contact-me': handleReq('contact'),
// }

const requestListener = (req, res) => {

  if(req.url === "/"){
    fs.readFile(options.index, (err, data) => {
      if(err){
        res.writeHead(500)
        res.end(err)
        return
      }
      res.writeHead(200)
      res.end(data)
    })
  }
  else if(req.url === "/about"){
    fs.readFile(options.about, (err, data) => {
      if(err){
        res.writeHead(500)
        res.end(err)
        return
      }
      res.writeHead(200)
      res.end(data)
    })
  }
  else if(req.url === "/contact-me"){
    fs.readFile(options.contact, (err, data) => {
      if(err){
        res.writeHead(500)
        res.end(err)
        return
      }
      res.writeHead(200)
      res.end(data)
    })
  }
  else {
    fs.readFile(options.notFound404, (err, data) => {
      if(err){
        res.writeHead(500)
        res.end(err)
        return
      }
      res.writeHead(200)
      res.end(data)
    })
  }

}

const server = http.createServer(requestListener)

server.listen(options.port, options.hostname, () => {
  console.log("All working")
})