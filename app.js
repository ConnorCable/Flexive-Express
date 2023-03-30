const express = require("express")
const app = express()
const cors = require("cors")
const { Sequelize, DataTypes } = require("sequelize")
import { db_start } from "./Models/models"


const port = 3000

//app.use(express.json())