import express from 'express'
import {addDepartment, deleteDepartment, editDepartment, getDepartment, getDepartments}  from '../controller/departmentController.js';
import verifyUser from '../middlewares/authMiddleware.js';
import { addEmployee, deleteEmployee, editEmployee, getEmployee, getEmployees } from '../controller/employeeController.js';


const deparmentRouter = express.Router() ;
deparmentRouter.post('/add',addDepartment)
deparmentRouter.get('/',getDepartments)
deparmentRouter.get('/:id',getDepartment)
deparmentRouter.put('/:id',editDepartment)
deparmentRouter.delete('/:id',deleteDepartment)

export default deparmentRouter