import React from 'react'
import '../css/style.css'

function TodoItem(props) {
    const text = props.item.text
    const completed = props.item.completed
    const id = props.item.id

    return (
        <div className="todo-item">
            <input type="checkbox" checked={completed} onChange={() => props.handleChange(id)}/>
            <p>{text}</p>
        </div>
    )
}

export default TodoItem