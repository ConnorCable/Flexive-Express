import { Investment } from "../Models/investment.model";


export const getAll = async (req,res) => {
    if(!req.body.id){
        res.status(404).send("User ID not provided")
        return
    }
    const id = Number.parseInt(req.body.id)
    const investments = await Investment.findall({
        where: {
            userId : id
        }
    })
    res.status(200).json(investments)
}

export const update = async(req,res) => {
    if(!req.body.id){
        res.status(404).send("Investment ID not provided")
        return
    }
    const id = Number.parseInt(req.body.id)
    if(req.body.id === id){
        await Investment.update(req.body, {
            where : {
                id : id
            }
        })
        res.status(200).end()
    }
    else{
        res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id}).`);
    }

}

export const remove = async(req, res) => {
    const id = Number.parseInt(req.body.id)
    await Investment.destroy({
        where: {
            id : id
        }
    })
    
    res.status(200).end()

}