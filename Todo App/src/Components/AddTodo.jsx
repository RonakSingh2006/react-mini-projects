
import {useState} from "react";


function AddTodo({handleAdd}) {

  let [inputTask , setText] = useState("");
  let [inputDate , setDate] = useState("");

  return (
    <div className="container text-center">
      
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo" value = {inputTask} onChange = {(e)=>{
            setText(e.target.value);
          }}/>
        </div>

        <div className="col-4">
          <input type="date" name="todo-date" id="todo-date" value = {inputDate} onChange={(e)=>{
            setDate(e.target.value);
          }}/>
        </div>

        <div className="col-2">
          <button type="button" className="btn btn-success" onClick = {()=>{
            handleAdd(inputTask,inputDate);
            setText("");
            setDate("");
          }}>
            Add
          </button>
        </div>

      </div>
    </div>
  );
}
export default AddTodo;
