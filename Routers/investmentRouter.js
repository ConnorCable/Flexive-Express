import { Router } from "express"

const investmentRouter = Router()



investmentRouter.post(`/create`, async (req,res)=> {
    // create an investment
})

investmentRouter.get(`/:id`, async (req,res)=> {
    // get user's investments
})

investmentRouter.patch(`/:id`, async (req,res)=> {
    // edit a user's investment
})

investmentRouter.delete(`/:id`, async (req,res)=> {
    // delete a user's investment
})

export default investmentRouter