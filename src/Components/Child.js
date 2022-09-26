import React, { useState } from 'react'

const Child = (props) => {
  const [value, setValue] = useState('')
  const [display, setDisplay] = useState(false)
  const handleChange = (event) => {
    setValue(event.target.value)
    // console.log(event.target.value)
  }
  function wordChanger() {
    if (value === '') {
      setDisplay((prevDisplay) => {
        return !prevDisplay
      })
    } else {
         const newInput = {
        id: Math.random().toString(),
        title: value
      }
      props.newProps(newInput)

    }
    setValue('')
  }
  function doNothing() {
    setDisplay((prevDisplay) => {
      return !prevDisplay
    })
  }

  return (
    <div className='todo'>
      <div>
        <label>Please enter a Todo Below</label>
        <input type='text' onChange={handleChange} value={value} />
        <p className={display ? 'error' : 'no-error'}>Please add a Todo</p>
        <button className='btn' onClick={display ? doNothing : wordChanger}>Add Todo</button></div>

    </div>

  )
}

export default Child