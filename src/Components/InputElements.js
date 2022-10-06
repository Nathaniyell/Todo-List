import React,{useState} from 'react'
import { MdClose } from 'react-icons/md'


const InputElements = (props) => {
  const [list, setList] = useState(true)
  function removeHandler() {
    setList(false)
    }

  return (
    <ul>
      {list && <li>{props.title}<button onClick={removeHandler}><MdClose /></button></li>}
    </ul>
  )
}

export default InputElements