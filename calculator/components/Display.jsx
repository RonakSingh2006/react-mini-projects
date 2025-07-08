import style from "./Display.module.css";

function Display({txt}){
  return <input className = {style.display} type="text"  disabled value={txt}/>
}
export default Display;