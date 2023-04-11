import { DataTypes } from "sequelize"


export const User = (sequelize) =>  sequelize.define("user", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
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



