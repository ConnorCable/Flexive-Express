import { Sequelize} from "sequelize";
import { User } from "../Models/user.model.js";
import { Investment } from "../Models/investment.model.js";


export const db_start = () => {

    const sequelize = new Sequelize(
        'flexive',
        'root',
        'ctcmc',
        {
            host: 'localhost',
            dialect: 'mysql'
        }
    )
    
    User(sequelize)
    Investment(sequelize)

    
    
    sequelize.authenticate().then(() => {
       console.log('Connection has been established successfully.');
    }).catch((error) => {
       console.error('Unable to connect to the database: ', error);
    });

    
    const {user, investment} = sequelize.models

    user.hasMany(investment)
    
    
    sequelize.sync()

}




