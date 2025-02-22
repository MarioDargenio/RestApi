import {Router} from 'express'
import {getEmployees, createEmployees, updateEmployees, deleteEmployees, getEmployee} from '../controllers/employees.controller.js'

const router = Router()

router.get('/employees', getEmployees)
router.get('/employees/:id', getEmployee)


router.post('/employees', createEmployees)
router.put('/employees', updateEmployees)
router.delete('/employees', deleteEmployees)
router.delete('/employees/:id', deleteEmployees)
router.patch('/employees/:id', updateEmployees)



export default router


