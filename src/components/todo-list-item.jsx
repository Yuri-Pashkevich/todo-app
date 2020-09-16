import React from 'react';
import '../styles/todo-list-item.scss'

export const TodoListItem = ({ label, done, important, onDeleted, onToggleDone, onToggleImportant }) => {
    let classNames = 'todo-list-item';
    if (done) {
        classNames += ' done';
    }
    if (important) {
        classNames += ' important';
    }
    return (
        <span className={classNames} >
            <span className="todo-list-item-label" onClick={onToggleDone}>{label}</span>
            <button type="button" className="btn btn-success btn-sm float-right" onClick={onToggleImportant} >
                <i className="fa fa-lightbulb-o" />
            </button>
            <button type="button" className="btn btn-danger btn-sm float-right" onClick={onDeleted}>
                <i className="fa fa-trash-o" />
            </button>
        </span>
)
}