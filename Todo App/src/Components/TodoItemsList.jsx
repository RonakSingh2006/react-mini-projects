import TodoItem from "./TodoItem";

function TodoItemsList({arr,onDelete}){

  return <> 
  {arr.map(it => <TodoItem key = {it.task} task={it.task} date = {it.date} 
  handleDelete={()=>{onDelete(it)}}
  />)}
  </>
}

export default TodoItemsList;