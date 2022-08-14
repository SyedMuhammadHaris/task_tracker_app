require('dotenv').config();
const express = require('express');
const taskRoutes = require('./routes/task_tracker_routes.js');
const usersRoute = require('./routes/userRoutes') 
const mongoose = require('mongoose');
//express app 
const app = express();

//middleware
app.use(express.json());

app.use((req,res,next)=>{
     console.log(req.path,req.method);
     next();
});

//routes
app.use('/api/tasks',taskRoutes);
app.use('/api/users', usersRoute);



//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log("Server is Listening on Port",process.env.PORT);
        });
    })
    .catch((error)=>{
         console.log(error);
         process.exit(1);
    })

// app.listen(process.env.PORT,()=>{
//     console.log("Server is Listening on Port",process.env.PORT);
// });