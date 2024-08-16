import express from 'express'
import * as controller from '../controller/index.js'

const investingRouter = express.Router()

investingRouter.get('/all-products', controller.investing.all)


export default investingRouter