import { deleteUser, getAllUser, updateUser } from '../controllers/user'
import express from 'express'
import { isAuthenticated, isOwner } from '../middlewares'

export default (router: express.Router) => {
    //isAuthenticated must come first
    router.get('/users', isAuthenticated, getAllUser)
    router.delete('/users/:id', isAuthenticated, isOwner, deleteUser)
    router.patch('/users/:id', isAuthenticated, isOwner, updateUser)
}
