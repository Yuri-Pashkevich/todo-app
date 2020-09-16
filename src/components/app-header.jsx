import React from 'react'
import '../styles/app-header.scss';

export const AppHeader = ({ toDo, done }) => (
    <div className="app-header d-flex align-items-end">
        <h1>Todo list</h1>
        <h2>{toDo} more to do, {done} done</h2>
    </div>
)