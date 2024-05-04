const Service = require('../models/service');

const serviceController = {
  // to create a new service
  createService: async (req, res) => {

    try {

      //get data from req body from postman
      const { name, category, price,description } = req.body;

      // Create  instance
      const newService = new Service({ name, category, price,description });

      // Saveing to the database
      await newService.save();

      // Send the newly created service as the response
      res.status(201).json({ message:'service created', data: newService });
    } catch (error) {
      // If an error occurs, send an error response
      res.status(500).json({ success: false, error: error.message });
    }
  },

  // Controller to get all services
  getAllServices: async (req, res) => {
    try {

      //find data in database
      const services = await Service.find();
      // Send as response
      res.status(200).json({ success: true, data: services });
    } catch (error) {
      //send error as response
      res.status(500).json({ success: false, error: error.message });
    }
  }
};

module.exports = serviceController;
