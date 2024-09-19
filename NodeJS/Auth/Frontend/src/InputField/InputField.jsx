import React, { useState } from 'react'
import {useField} from 'formik'
const InputField = ({label,...props}) => {
  const [field,meta] = useField(props)
  return (
    <>
    <label htmlFor={props.id || props.name}>{label}</label>
    <input {...field}{...props} type={props.type} name={props.name} id={props.id} placeholder={props.placeholder} />
    {meta.touched && meta.error ? (
        <div style={{ color: 'red' }}>{meta.error}</div>
      ) : null}
    </>
  )
}

export default InputField
