const express = require('express')
const control_staff = require('../Controllers/control_staff')
const router = express.Router();
//read the staff data
router.get('/staff',control_staff.read)
//create the staff data
router.post('/staff',control_staff.create)
//update the staff data
router.put('/staff/:id',control_staff.update)
//delete the staff data
router.delete('/staff/:id',control_staff.deleted)
//export the object
module.exports = router;