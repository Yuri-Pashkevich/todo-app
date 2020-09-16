import React from 'react';
import { TodoListItem } from './todo-list-item';
import '../styles/todo-list.scss'

export const TodoList = ({ todos, delTask, onToggleDone, onToggleImportant }) => {
    const todoElements = todos.map(item => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                <TodoListItem 
                    onDeleted={() => delTask(id)} 
                    onToggleDone={() => onToggleDone(id)} 
                    onToggleImportant={() => onToggleImportant(id)} 
                    {...itemProps} 
                />
            </li>
        ) 
    });
    return (
        <ul className={`list-group ${todos.length >= 8 ? 'list-overflow' : null}`}>
            {todoElements}
        </ul>
    )
}


