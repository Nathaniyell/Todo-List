import React, { useState } from 'react'
import Child from './Child'
import InputElements from './InputElements'

const words = [
    {
        id: 'a',
        title: 'Go to Church'
    },
    {
        id: 'b',
        title: 'Go to School'
    }
]

const Parent = () => {
    const [word, setWord] = useState(words)

    const changeWord = (newWord) => {
        setWord((prevWord) => {
            return [newWord, ...prevWord]
        })
    }
    return (
        <div className='form'>
            <Child newProps={changeWord} />
            {word.map((newWord) => {
                return (
                    <InputElements
                        key={newWord.id}
                        title={newWord.title}
                    />)
            })}
        </div>
    )
}

export default Parent