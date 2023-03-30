const {Router} = require('express')
const app = Router()

const root = "/users"

app.post(`${root}/register`, (req,res)=> {
    // register a user
})

app.get(`${root}/wallet/:id`, (req,res)=> {
    // get user's wallet
})

app.patch(`${root}/wallet/:id`, (req,res)=> {
    // change user's wallet
})