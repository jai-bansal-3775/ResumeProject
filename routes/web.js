import express from 'express'
const router = express.Router()
import { homeController } from '../controllers/homeController.js'
import { projectController } from '../controllers/serviceController.js'
import { skillController } from '../controllers/skillController.js'
import { contactController } from '../controllers/contactController.js'



router.get('/',homeController)
router.get('/project',projectController)
router.get('/skill',skillController)
router.get('/contact',contactController)

export default router