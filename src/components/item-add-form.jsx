import React, { useRef } from 'react'
import '../styles/item-add-form.scss'

export const ItemAddForm = ({ addTask }) => {
    const inputRef = useRef();
    const spanRef = useRef();
    const onSubmit = e => {
        e.preventDefault()
        if(inputRef.current.value === null || inputRef.current.value.length <= 2) {
            spanRef.current.innerText = 'More than 2 chars expect and must be entered'
            inputRef.current.value = null
        } else {
            addTask(inputRef.current.value)
            inputRef.current.value = null
            spanRef.current.innerText = null
        }
    }
    return (
        <>
            <form className="item-add-form d-flex" onSubmit={onSubmit}> 
                <input type="text" className="form-control" ref={inputRef} placeholder="Type here your next task"/>
                <button className="btn btn-info" type="submit">Add new task</button>
            </form>
            <span className="item-add-error" ref={spanRef}></span>
        </>
    )
}