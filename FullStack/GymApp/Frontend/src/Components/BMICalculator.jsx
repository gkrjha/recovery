import React, { useState } from 'react'
import {toast} from 'react-toastify'
const BMICalculator = () => {
  const [height,setHeight]=useState();
  const [weight,setWeight]=useState();
  const [gender,setGender]=useState();
  const [bmi,setBmi]=useState();

  const calculateBMI =(e)=>{
    e.preventDefault();
    if(!height || !weight || !gender){
      toast.error("Please enter a valid height, weight or gender");
      return;
    }
    const heightInMetres=height/100;
    const bmiValue=weight/(heightInMetres*heightInMetres);
    setBmi(bmiValue.toFixed(2));
    if(bmi<18.5){
      toast.warning(" You Are Underweight");
    }
    else if(bmi>=18.5 && bmi<25){
      toast.success("You Are Normal Weight");
    }

  }

  return (
    <>
    </>
  )
}

export default BMICalculator
