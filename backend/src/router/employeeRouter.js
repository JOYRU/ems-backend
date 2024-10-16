import express from 'express'
//import {addDepartment, deleteDepartment, editDepartment, getDepartment, getDepartments}  from '../controller/departmentController.js';
import verifyUser from '../middlewares/authMiddleware.js';
import {upload, addEmployee, deleteEmployee, editEmployee, getEmployee, getEmployees } from '../controller/employeeController.js';


const employeeRouter = express.Router() ;
employeeRouter.post('/add',upload.single('image'),addEmployee)
employeeRouter.get('/',getEmployees)
employeeRouter.get('/:id',getEmployee)
employeeRouter.put('/:id',editEmployee)
employeeRouter.delete('/:id',deleteEmployee)

export default employeeRouter