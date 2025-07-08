import style from "./BtnContainer.module.css";
import KeyButton from "./KeyButton";

function BtnContainer({arr,handleBtn}){
  return <div className = {style.btnContainer}>
      {arr.map(e => <KeyButton key = {e} txt = {e} handleBtn={handleBtn}/>)}
    </div>
}

export default BtnContainer;