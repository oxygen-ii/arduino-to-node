
const http = require('http')

http.createServer((request, response) => {
    response.write("Hello world_2")
    response.end()
}).listen(3000)

console.log('Server started on port: 3000')
