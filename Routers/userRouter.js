import { Router } from "express"

import bodyParser from "body-parser"
const userRouter = Router()



userRouter.post(`/login`, async (req,res)=> {
    // login a user
})

userRouter.post(`/register`, async (req,res)=> {
    // register a user
})

userRouter.get(`/:id`, async (req,res)=> {
    // get user's investments
})

userRouter.get(`/wallet/:id`, async (req,res)=> {
    // get user's wallet
})

userRouter.patch(`/wallet/:id`, async (req,res)=> {
    // change user's wallet
})

export default userRouter