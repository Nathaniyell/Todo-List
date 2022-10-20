import React, { useState, useEffect } from 'react'
import Child from './Child'
import InputElements from './InputElements'

const words = []

const Parent = () => {
    const [word, setWord] = useState(
        function(){return JSON.parse(localStorage.getItem('notes'))|| words})

    useEffect(()=>{
        localStorage.setItem('notes', JSON.stringify(word))
    }, [word])

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