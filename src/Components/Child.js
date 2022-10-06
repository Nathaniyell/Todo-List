import React, { useState } from 'react'

const Child = (props) => {
  const [value, setValue] = useState('')
  const [display, setDisplay] = useState(false)

  const handleChange = (event) => {
    if (event.target.value.trim().length > 0) {
      setDisplay(false)
    }
    setValue(event.target.value)
  };


  const formSubmitHandler = event => {
    event.preventDefault();
    if (value.trim().length === 0) {
      setDisplay((prevState) => {
        return !prevState
      })
      return;
    }
    const newInput = {
      id: Math.random().toString(),
      title: value
    }

    props.newProps(newInput)
    setValue('')
  };


  return (
    <form className='todo' onSubmit={formSubmitHandler}>
      <div>
        <label style={{ color: display && 'red' }}>Please enter a Todo Below</label>
        <input type='text' onChange={handleChange} value={value} style={{ borderColor: display && 'red' }} />
        <button className='btn' type='submit'>Add Todo</button>
      </div>

    </form>

  )
}

export default Child