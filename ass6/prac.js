const http=require("http");
const PORT=3000;

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"})

    if(req.url==="/"){
        res.end("welcome to home page")
    }else if(req.url==="/about"){
        res.end("welcome to about page")

    }else if(req.url==="/contact"){
        res.end("this is contact page")
    }else{
        res.end("404 page not found");
    }

    server.listen(PORT,()=>{
        console.log(`server is running at ${PORT}`)
    })

    
})