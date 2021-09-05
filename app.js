
const http = require('http')

http.createServer((request, response) => {
    response.write("Hello world_ii")
    response.end()
}).listen(3000)

console.log('Server started on port: 3000')