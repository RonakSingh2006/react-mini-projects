import style from "./App.module.css";
import Display from "../components/Display";
import BtnContainer from "../components/BtnContainer";
import {useState} from "react";
function App() {
  let buttonTexts = ["(",")","<-","C","7","8","9","+","4","5","6","-","1","2","3","*","0",".","=","/"];

  let [displayTxt , setDisplay] = useState("");
  
  return (
    <div className={style.calculator}>
      <Display txt ={displayTxt} />
      <BtnContainer arr={buttonTexts} handleBtn={(e)=>{
          let txt = e.target.innerText;

          if( txt === "C"){
            setDisplay("");
          }
          else if(txt === "<-"){
            setDisplay(displayTxt.substring(0,displayTxt.length-1));
          }
          else if(txt === "="){
            let op;
            try{
              op = eval(displayTxt).toString();
            }
            catch(e){
              op = "Invalid Operation"
              console.log(e);
            }

            setDisplay(op);
          }
          else{
            setDisplay(displayTxt + txt);
          }

          
      }} />
    </div>
  );
}

export default App;
