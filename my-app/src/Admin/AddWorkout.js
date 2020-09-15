import React, {useState} from "react";
import Axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
<<<<<<< HEAD
import Workout from "./Workout.css";
=======
>>>>>>> 1053831173bf1c941143b07c5f46f1dfec07c6dc

 
export default function AddWorkout()
{
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [exercises,setExercises]=useState([
      {image:" ", exerciseName:" "}
  ]);

  const handleChangeInput = (index, event) => {
    const values = [...exercises];
    values[index][event.target.name] = event.target.value;
    setExercises(values);
  }

   const addInput=()=>{
        setExercises([...exercises,{image:" ",exerciseName:" "}])
   }
   const handleRemoveFields = (index) => {
    const values  = [...exercises];
    values.splice(index, 1);
    setExercises(values);
  }



    const submit = async(e) =>{

    e.preventDefault();
    try{
        const addExercise={title,description,exercises};
        await Axios.post("http://localhost:5000/api/exercises",addExercise); 
        
    }catch(err)
    {
        console.log("Exercise add failed");
    }
};
  
    return(
<<<<<<< HEAD
        <div className="AddWorkout_exercise">
=======
        <div>
>>>>>>> 1053831173bf1c941143b07c5f46f1dfec07c6dc
            <form className="form" onSubmit={submit}>
                <label>Title</label>
                <input type="text" name="title"
                onChange={(e) => setTitle(e.target.value)} />
                <label>Description</label>
                <input type="text" name="Description"
                 onChange={(e)=> setDescription(e.target.value)} /> 
                 {exercises.map((exercise,index) => (
                     <div key={index}>
                         <label>Image</label>
                          <input type="text" name="image" value={exercise.image}
                            onChange={event => handleChangeInput(index,event) }/>
                            <label>Exercise Name</label>
                          <input type="text" name="exerciseName" value={exercise.exerciseName}
                           onChange={event => handleChangeInput(index,event)}    />

             <IconButton
              onClick={() => handleRemoveFields(index)}
            >
              <RemoveIcon />
            </IconButton>
                            
                
                <IconButton onClick={()=>addInput()}>
                     <AddIcon/>
                 </IconButton>
                 </div>
                
                  ))}
                   <div>
<<<<<<< HEAD
                     
=======
                     <label>Submit</label>
>>>>>>> 1053831173bf1c941143b07c5f46f1dfec07c6dc
                <input type="submit" value="Submit" />
                 </div>
            </form>
        </div>
       
    )
    };
<<<<<<< HEAD

    
=======
    
>>>>>>> 1053831173bf1c941143b07c5f46f1dfec07c6dc
