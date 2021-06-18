import React from 'react'
import '../css/style.css'

function TodoItem(props) {
    const text = props.item.text
    const completed = props.item.completed
    const id = props.item.id
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return (
        <div className="todo-item">
            <input type="checkbox" checked={completed} onChange={() => props.handleChange(id)}/>
            <p style={completed ? completedStyle : null}>{text}</p>
        </div>
    )
}

export default TodoItem