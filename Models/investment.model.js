import { DataTypes } from "sequelize"

export const Investment = (sequelize) => sequelize.define("investment", {
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