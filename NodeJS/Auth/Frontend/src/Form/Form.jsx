import React from 'react';
import InputField from '../InputField/InputField';
import './Form.css'
import { Formik, Form as FormikForm } from 'formik'; // Rename Formik's Form to avoid naming conflicts
import * as yup from 'yup';
import axios from 'axios';

const initialValues = {
  name: '',
  age: '',
  email: '',
  password: '',
  confirmPassword: '',
  contact: '',
  address: '',
  dateOfBirth: ''
};

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .matches(/^[A-Za-z]+$/, 'Name must contain only letters')
    .required('Name is required'),
  
  age: yup
    .number()
    .min(1, 'Age must be a valid two-digit number')
    .max(99, 'Age must be a valid two-digit number')
    .required('Age is required'),
  
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),

  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(/[@$!%*?&#]/, 'Password must contain at least one special character')
    .required('Password is required'),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),

  contact: yup
    .string()
    .matches(/^\d{10}$/, 'Contact number must be exactly 10 digits')
    .required('Contact number is required'),
  
  dateOfBirth: yup
    .date()
    .required('Date of Birth is required')
});

const Form = () => {

  const handleSubmit = async (value , {setSubmitting})=>{
    try{
      const response = await axios.post('http://127.0.0.1:8080/signup',value)
    }catch(err){
      console.error('There was an error submitting the form!', err);
    }
  }

  return (
    <>
    <div className="form-container">
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => ( // Wrap the form rendering in a callback function
        <FormikForm onSubmit={handleSubmit} className='form'>
          <InputField
            label="Name"
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="anime-input anime-input-name"
          />
          <InputField
            label="Age"
            type="number"
            name="age"
            id="age"
            placeholder="Enter your age"
            className="anime-input anime-input-age"
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="anime-input anime-input-email"
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="anime-input anime-input-password"
          />
          <InputField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm your password"
             className="anime-input anime-input-confirmPassword"
          />
          <InputField
            label="Contact"
            type="text"
            name="contact"
            id="contact"
            placeholder="Enter your contact number"
            className="anime-input anime-input-contact"
          />
          <InputField
            label="Address"
            type="text"
            name="address"
            id="address"
            placeholder="Enter your address"
             className="anime-input anime-input-dob"
          />
          <InputField
            label="Date of Birth"
            type="date"
            name="dateOfBirth"
            id="dateOfBirth"
            placeholder="Enter your date of birth"
             className="anime-input anime-input-dob"
          />

          <button type="submit">Submit</button>
        </FormikForm>
        
      )}
    </Formik>
    
    </div>
    <h4 >Login</h4>
    </>
  );
};

export default Form;
