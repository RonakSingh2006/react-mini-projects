import style from "./KeyButton.module.css";

function KeyButton({txt,handleBtn}){
  return <button className = {style.button} onClick = {handleBtn}>{txt}</button>;
}

export default KeyButton;