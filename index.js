let express = require('express');
let mongoose = require('mongoose');
let employeeRouter = require('./routes/EmployeeRoutes.js');

let app = express();
let port = process.env.PORT || 9000
app.use(express.json())

mongoose.connect('mongodb+srv://dilan:KdFLt4YHGyVOUEpi@comp3123.e5acu.mongodb.net/assignment2_101278656?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

app.use(employeeRouter)

app.listen(port, () => {
    console.log('Server is running...')
});