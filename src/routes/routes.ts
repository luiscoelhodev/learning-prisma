import express, { Router } from 'express'
const router = express.Router()

router.get('/hello', (_request, response) => {
  return response.status(200).send({ hello: 'world' })
})

export { router }