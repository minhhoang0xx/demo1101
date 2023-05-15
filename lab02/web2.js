
const http = require('http')
const port = 4000
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type","text/html")
    switch (req.url) {
        case "/": 
            res.write("<h1>Welcome</h1>")
            res.write("<a href='/login'> abc")
            res.end();
            break;
        case "/api":
            res.write('{"university": "greenwich", "address": "Pham Van Bach - HN"}');
            res.end();
            break;
        case "/login":
            res.write("<form>")
            res.write("Username: <input type=text required> <br>")
            res.write("Password: <input type=password required> <br>")
            res.write("<button>Login</button>")
            res.write("</form>")
            res.end();
            break;
        default:
            res.write("<h1 style = 'color: red;'>Page not found</h1>")
            res.end();
            break;
    }
})
server.listen(port, () =>{
        console.log("Server is running at http://localhost:" + port);
})