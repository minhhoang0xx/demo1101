const http = require('http')
const server = http.createServer((req, res) => {
   res.setHeader("Content-Type","application/json")
   res.write('{"country" : "Viet Nam", "capital" : "Ha Noi"}')
   res.end()
})
server.listen(6000, () => {
 console.log("My website run successfully !")
 console.log("http://localhost:6000")
})