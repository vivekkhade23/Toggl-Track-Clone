import React, { useEffect, useState } from 'react'
import { BsPause, BsStop } from 'react-icons/bs';
import tstyle from "./Timer.module.css";
const Timer= () => {
    const [second, setsecond] = useState(0);
  const [mintues, setmintues] = useState(0);
  const [hours, sethours] = useState(0);
  const[pause,setpause]=useState(false);

  useEffect(() => {
    let timer = setInterval(() => {
      if(pause){
      setsecond(second + 1);
      if (second === 59) {
        setmintues(mintues + 1);
        setsecond(0);
      }
      if (mintues === 59) {
        sethours(hours + 1);
        setmintues(0);
      }
    }
    }, 1000);

    return () => clearInterval(timer);
  });
 
 

  // for stop
  const stop = () => {
    setpause(!pause);
  };

  return (
    <div className={tstyle.maintimer}>
      <div className={tstyle.timer}>
        <h1 className={tstyle.timerh1}>My Toggl Timer</h1>
          <div className={tstyle.timer_container} >
           
            <h1 className={tstyle.headingTimer}>
              {hours < 10?"0"+hours:hours}:
              {mintues < 10 ? "0" + mintues : mintues}:
              {second < 10 ? "0" + second : second}
            </h1>
          </div>
        
          <div > <button
            onClick={stop}
            style={{
              backgroundColor: "rgb(232, 113, 97)",
          height:"50px",
          width:"50px",
              fontSize: "20px",
             marginLeft:"30px",
             marginTop:"7px",
             padding:"10px",
             paddingLeft:"15px",
              borderRadius:"50%",
            }}
          >
           {(!pause)?< BsStop/>:<BsPause/>}
          </button></div>
         
        </div>
      </div>
  );
}

export default Timer;