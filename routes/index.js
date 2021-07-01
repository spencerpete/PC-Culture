import {Router} from 'express'
import productRoutes from './products.js'
import userRoutes from './users.js'

const router = Router()

router.get('/', (req, res) => res.send('Root! There it is!'))

router.use('/', productRoutes)
router.use('/', userRoutes)

export default router;

