import express from 'express'
import axios from 'axios'


async function post(req, res) {
    const response = await axios.post('https://reqres.in/api/users', req.body)
    res.send(response.data)
}

function run() {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));

    app.post('/post', post)

    const server = app.listen(8080, function () {
        console.log(`访问地址 http://${server.address().address}:${server.address().port}`)
    })
}

run()
