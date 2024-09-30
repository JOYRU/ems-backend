import express from 'express'
import seedUser from '../controller/seedController.js'
const seedRouter = express.Router() ; 

seedRouter.post('/users',seedUser) ; 

export default seedRouter