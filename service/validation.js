import { body } from 'express-validator'

export const registration = [
    body('email').isEmail(),
    body('lastname').optional().isString(),
    body('firstname').optional().isString(),
    body('patronymic').optional().isString(),
    body('phone').isLength({ min: 11}).isString(),
    body('password').isString()
]

export const login = [
    body('email').optional().isEmail(),
    body('username').optional().isString(),
    body('password').isString()
]
 
export const updateProfile = [
    body('lastname').optional().isString(),
    body('firstname').optional().isString(),
    body('patronymic').optional().isString(),
    body('phone').optional().isString(),
]
