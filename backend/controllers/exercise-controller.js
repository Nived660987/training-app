const HttpError=require("../models/http-error-model");
const uuid=require("uuid");

const Exercise=require("../models/exerciseModel");
let Dummy_Exercises=[
    {
        id:'e1',
        title:'core burn',
        description:'This is a workout which focuses on the core'
        
    }
    ];


const getExerciseById= async (req,res,next) =>{
    const exerciseId=req.params.eid;
    let exercise;
    try{
     exercise=Exercise.findById(exerciseId);
    }catch(err)
    {
        const error=new HttpError("Could not find exercise by id",500);
        return next(error);
    }

    if(!exercise)
    {
       const error= new HttpError("Could not find id",404);
        return next(error);

    }
     res.json({exercise: (await exercise).toObject({getters: true})});


  };

  const createExercise= async (req,res,next)=>{
     const {title,description,exercises}=req.body;
     const createdExercise=new Exercise({
        title,
        description,
        exercises
        
     });
     try{
         await createdExercise.save();
     }catch(err){
         const error=new HttpError("Create exercise failed",500);
         return next(error);
     }
     res.status(201).json({exercise: createdExercise});



  };

   const updateExercise= async (req,res,next) =>{
        const {title,description}=req.body;
        const exerciseId=req.params.eid;
        let exercise;
    try{
     exercise=await Exercise.findById(exerciseId);
    }catch(err)
    {
        const error=new HttpError("Could not find exercise by id",500);
        return next(error);
    }

        exercise.title=title;
        exercise.description=description;
        try{
            await exercise.save();
        }catch(err){
            const error=new HttpError("Update exercise failed",500);
            return next(error);
        }
       res.status(201).json({exercise: (await exercise).toObject({getters:true})});

   };

   const deleteExercise= async (req,res,next) =>{

        const exerciseId=req.params.eid;
        let exercise;
        try{
         exercise=await Exercise.findById(exerciseId);
        }catch(err)
        {
            const error=new HttpError("Could not find exercise by id",500);
            return next(error);
        }
        try{
            await exercise.remove();
        }catch(err){
            const error=new HttpError("Delete exercise failed",500);
            return next(error);
        }
        res.status(200).json({message:"Deleted exercise"});
   }

 exports.getExerciseById=getExerciseById;
 exports.createExercise=createExercise;
 exports.updateExercise=updateExercise;
 exports.deleteExercise=deleteExercise;