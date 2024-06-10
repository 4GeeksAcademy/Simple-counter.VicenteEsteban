
import React, { useEffect, useState } from "react";
import ButtonsCounter from "./ButtonsCounter";

const SecondCounter = () => {
    const [counter, setTime] = useState(10);
    const [isActive, setIsActive] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
      let interval = null;
      if (isActive){
      interval = setInterval(() => {
        setTime(prevCounter => prevCounter - 1);
      }, 1000);
    } else if (!isActive && counter !== 0){
      clearInterval(interval);
    }
      return () => clearInterval(interval);
    }, [isActive, counter]);

    useEffect (() => {
      if (counter === 0){
        alert ("Se acabo el tiempo!");
        setIsActive(false);
        setIsDisabled(true);
      }
    }, [counter]);


    const clickStart = () => {
      setIsActive(true);
    };

    const clickStop = () => {
      setIsActive(false);
    };

    const clickReset = () => {
      setIsActive(false);
      setTime(10);
      setIsDisabled(false);
    };
  
    const counterString = counter.toString().padStart(4, '0');
  

    return (
    <div className="d-flex flex-column alingn-items-center">
      
      <div className="d-flex justify-content-center">
        <div className=" bg-secondary m-4 p-4 fs-1 border border-danger border-3 rounded-5 rounded-top-0 ">
              <i className="icono fa-regular fa-clock fa-2xl text-white " ></i>
        </div>
        {counterString.split('').map((digit, index)=>(
            <div key={index} className="bg-secondary m-4 p-4 text-white fs-1 border border-danger border-3 rounded-5 rounded-top-0">{digit}
            </div>
        ))}

      </div>
        <ButtonsCounter
        onStart={clickStart}
        onStop={clickStop}
        onReset={clickReset}
        isDisabled={isDisabled}
        />
    </div>
    );
};   

    
  
  export default SecondCounter;