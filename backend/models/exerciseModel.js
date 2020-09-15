mongoose=require("mongoose");

const Schema=mongoose.Schema;


const exerciseSchema=new Schema({

    
    title: { type: String, required: true },
    description:{ type: String, required: true},
    exercises:[{
        image:{type: String, required: true},
        exerciseName:{type: String, required: true}
    }]
    

});
<<<<<<< HEAD
module.exports=mongoose.model("Exercise" ,exerciseSchema);



/////////////////////////////////////////////////////////
INDEX.js
Copy app.use("/api/exercises",exerciseRoutes);
=======
module.exports=mongoose.model("Exercise" ,exerciseSchema);
>>>>>>> 1053831173bf1c941143b07c5f46f1dfec07c6dc
