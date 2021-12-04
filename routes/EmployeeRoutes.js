let express = require('express');
let employeeModel = require('../models/Employee');
let app = express();

// Get All
app.get('/api/v1/employees', async (req, res) => {
    const employees = await employeeModel.find({});

    try {
        res.send(employees);
        res.status(200).send("All Employee resources are fetched.");
    } catch (err) {
        console.log("Error: " + err);
        res.status(500).send(err);
    }
});

// Insert
app.post('/api/v1/employees', async (req, res) => {
    const employee = new employeeModel(req.body);

    try {
        await employee.save();
        res.send(employee);
        res.status(201).send("A new Employee resources is created.")
    } catch (err) {
        console.log("Error: " + err);
        res.status(500).send(err);
    }
});

// Get by ID
app.get('/api/v1/employees/:id', async (req, res) => {
    const employees = await employeeModel.findById(req.params.id);

    try {
        res.send(employees);
        res.status(200).send("One Employee resource is fetched.")
    } catch (err) {
        console.log("Error: " + err);
        res.status(500).send(err);
    }
});

// Update
app.put('/api/v1/employees/:id', async (req, res) => {
    try {
        await employeeModel.findByIdAndUpdate(req.params.id, req.body)
        await employeeModel.save()
        res.send(employee)
        res.status(200).send("Employee resource is updated.")
    } catch (err) {
        console.log("Error: " + err);
        res.status(500).send(err)
    }
})

// Delete
app.delete('/api/v1/employees/:id', async (req, res) => {
    try {
        const employee = await employeeModel.findByIdAndDelete(req.params.id)

        if (!employee) res.status(404).send("No item found")
        res.status(204).send("Employee resource is deleted.")
    } catch (err) {
        console.log("Error: " + err);
        res.status(500).send(err)
    }
})

module.exports = app