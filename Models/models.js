import { Sequelize, DataTypes } from "sequelize";
 


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
    
    sequelize.authenticate().then(() => {
       console.log('Connection has been established successfully.');
    }).catch((error) => {
       console.error('Unable to connect to the database: ', error);
    });
    
    
    const User = Sequelize.define("user", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        wallet: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
        
    })
    
    const Investment = Sequelize.define("investment", {
    
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ticker: {
            type: DataTypes.STRING,
            allowNull: true
        },
        invested: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }
    
    })
    
    
    
    User.hasMany(Investment)
    
    sequelize.sync()

}

