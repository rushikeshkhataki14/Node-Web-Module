// let fs = require("fs");
// fs.open("info.txt", "a",(err,fd)=>{
//     if(err){
//         console.log("Error", + err);
//         return;
//     }
//     fs.writeFile(fd, "Welcome to NodeJs", (err)=>{
//         if(err){
//             console.log("Error" + err);
//             return;
//         }
//         console.log("write success");
//     })
// });



let http = require("http");
let fs = require("fs");

console.log("website running on http://localhost:8081");
let server = http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url == "/"){
        res.end(fs.readFileSync("index.html"));
    }
    else if(req.url == "/about"){
        res.end(fs.readFileSync("about.html"));
    }
    else{
    res.end("Page Not Found");
   }
});
server.listen(8081);