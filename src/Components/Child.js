import React, { useState } from 'react'

const Child = (props) => {
    const[value, setValue] = useState('')
    const handleChange = (event)=>{
    setValue(event.target.value)
    // console.log(event.target.value)
    }
    function wordChanger(newInput){
            newInput = {
            id: Math.random().toString(),
           title: value
        }
            
    props.newProps(newInput)
    setValue('')
    }
    const [display, setDisplay] = useState(false)
    function newFunction(){
        if(value === ''){
            setDisplay((prevDisplay)=>{
                return !prevDisplay

            })                     
        }
    }
  return (
    <div className='todo'>
       <div>
        <label>Please enter a Todo Below</label>
        <input type='text' onChange={handleChange} value={value}/>
      <p className={display ? 'error' :'no-error'}>Please Enter Title</p>
        <button className='btn' onClick={display ? null : wordChanger}>Add Todo</button></div>
        
    </div>
    
  )
}

export default Child