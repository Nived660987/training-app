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
module.exports=mongoose.model("Exercise" ,exerciseSchema);



///////////

