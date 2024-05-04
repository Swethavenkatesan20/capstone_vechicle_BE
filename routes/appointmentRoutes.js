const express = require('express');
const appointmentController = require('../controllers/appointmentControllers');
const auth = require('../middleware/auth');
const appointmentRouter = express.Router();

// Route to create a new appointment
appointmentRouter.post('/', auth.verifyToken, appointmentController.createAppointment);

// Route to get all appointments (requires authentication) only admin can see all the appointment
appointmentRouter.get('/', auth.verifyToken,auth.isAdmin, appointmentController.getAllAppointments);

module.exports = appointmentRouter;


