import express from 'express'
import multer from 'multer'

import * as controller from '../controller/upload.controller.js'
import checkAuth from '../middleware/checkAuth.js'
import storageService from '../service/diskStorage.js'

const uploadRouter = express.Router()

const uploadStudentAvatar = multer({
    storage: storageService('users')
})

uploadRouter.post('/avatar', checkAuth, uploadStudentAvatar.single('image'), controller.uploadAvatar)

export default uploadRouter