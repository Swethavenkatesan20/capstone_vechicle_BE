const Appointment = require('../models/appointment');
const User = require('../models/user')
const Service = require('../models/service')

const appointmentController = {

  //to create a new appointment
  createAppointment: async (request, response) => {
    try {
      // Extract appointment data from the request body
      const { 
        date, time, userId, serviceId } = request.body;

      // to book new appoinment
      const newAppointment = new Appointment({ date, time, userId, serviceId });


      // Save the new appointment to the database
      await newAppointment.save();

      // Send the newly created appointment as the response
      response.status(201).json({ message:"appointment booked" , data: newAppointment });

    } catch (error) {
      // If an error occurs, send an error response
      response.status(500).json({ success: false, error: error.message });
    }
  },

  // Controller to get all appointments
  getAllAppointments: async (request, response) => {
    try {

      // find appointments from the database
      const appointments = await Appointment.find();


      // Send as the response
      response.status(200).json({ success: true, data: appointments });
      
    } catch (error) {
      // If an error occurs, send an error response
      response.status(500).json({ success: false, error: error.message });
    }
  }
};

module.exports = appointmentController;
