import express, { Router } from 'express'
import UsersController from '../controllers/UsersController'
const router = express.Router()
const usersController = new UsersController()

router.get('/hello', (_request, response) => {
  return response.status(200).send({ hello: 'world' })
})

router.get('/users', usersController.getUsers)

export { router }