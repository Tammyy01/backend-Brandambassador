import express from 'express'
import { ContactController } from '../controllers/contactController'

const router = express.Router()

router.get('/applications/:applicationId/contacts', ContactController.list)
router.post('/applications/:applicationId/contacts', ContactController.create)
router.patch('/applications/:applicationId/contacts/:contactId', ContactController.update)
router.delete('/applications/:applicationId/contacts/:contactId', ContactController.remove)

export default router