// khai báo madule 'http' đẻ chạy web
const http = require('http')
// khai báo web server/hosting(opitional)
const host ='localhost'
// khai báo serer port
const port = 5000
// khai taọ server
const server = http.createServer((request,response) =>{
    response.write("<h1 style = 'color: blue'>sucubus </h1>")
    response.end("The End")
})
// chay server bằng cách listen cổng
server.listen(port,()=>{
    console.log("web server is running at http://" + host + ':' + port)
    // console.log("web server is running at http://localhost:3000")
})

