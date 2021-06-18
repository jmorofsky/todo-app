import React from 'react'
import '../css/style.css'

function TodoItem(props) {
    const text = props.item.text
    const completed = props.item.completed

    return (
        <div className="todo-item">
            <input type="checkbox" checked={completed}/>
            <p>{text}</p>
        </div>
    )
}

export default TodoItem