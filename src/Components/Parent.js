import React, { useState, useEffect } from 'react'
import Child from './Child'
import InputElements from './InputElements'

const words = []

const Parent = () => {
    const [word, setWord] = useState(
        () => JSON.parse(localStorage.getItem('notes')) || words)

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(word))
    }, [word])

    const NewTodo = (newWord) => {
        setWord((prevWord) => {
            return [newWord, ...prevWord]
        })
    }

    function deleteNote(todoId) {
        setWord(oldTodo => oldTodo.filter(eachTodo => eachTodo.id !== todoId))
        /*We are receiving a todoId from the button component, we filter 
       the word array and check if the todoId passed matches any of the id
       in the array if it doesn't we return an array that exempts that todoId and its contents
       thereby deleting it 
        */
        // console.log('delete note', todoId)
    }

    return (
        <div className='form'>
            <Child newProps={NewTodo} />
            {word.map((newWord) => {
                return (
                    <InputElements
                        key={newWord.id}
                        id={newWord.id}
                        title={newWord.title}
                        deleteNote={deleteNote}
                    />)
            })}
        </div>
    )
}

export default Parent