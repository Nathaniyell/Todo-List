import React from 'react'
import { MdClose } from 'react-icons/md'


const InputElements = (props) => {

  return (
    <ul>
      <li>{props.title}<button onClick={(id) => props.deleteNote(props.id)}><MdClose /></button></li>
    </ul>
  )
}

export default InputElements