import { User } from "../Models/user.model";


export const getByID = async (req,res) => {
    const id = Number.parseInt(req.body.id)
    const user = await User.findByPk(id)
    if(user){
        res.status(200).json(user)
    }
    else{
        res.status(404).send('User not found')
    }
}

export const create = async (req,res) => {
    if(req.body.id){
        req.status(400).send("ID should not be provided")
    }
    else{
        await User.create(req.body)
        res.status(201).end()
    }
}

export const getWallet = async(req,res) => {
    const id = Number.parseInt(req.params.id)
    const user = await User.findByPk(id)
    if(user){
        res.status(200).json(user.wallet)
    }
    else{
        res.status(404).send("User not found")
    }
}

export const updateWallet = async(req,res) => {
    const id = Number.parseInt(req.params.id)

    const changedWallet = req.body.changedWallet
    if (req.body.id === id) {
		await User.update({wallet: changedWallet}, {
            where: {
                id: id
            }
        })
		res.status(200).end();

	} else {
		res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id}).`);
	}
}







