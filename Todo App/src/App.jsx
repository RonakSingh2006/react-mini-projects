import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItemsList from "./Components/TodoItemsList";
import {useState} from "react";

import "./App.css";

function App() {
  let [data , setData ] = useState([]);

  let newData = (t,d)=>{
    return {
      task : t,
      date : d
    }
  }


  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <AppName />

      {/* Add Todd  */}

      <AddTodo 
      handleAdd={(task,date)=>{
        if(task == "" || date == "") return;
        setData([newData(task,date),...data]);
      }} 

      />

      <TodoItemsList arr = {data} 
      onDelete={(it)=>{
        setData(data.filter((e)=>e!=it));
      }}
      />
    </div>
  );
}

export default App;
