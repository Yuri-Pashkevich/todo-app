import React, { useState } from 'react';
import { SearchPanel, AppHeader, TodoList, ItemStatusFilter, ItemAddForm } from './index';
import '../styles/app.scss'
 
let maxId = 0;

export default function App() {
    const createTodoItem = (label, important) => {
        return {
            label,
            important: important,
            done: false,
            id: maxId++
        }
    }
    const todoData = [
        createTodoItem('Drink coffee'),
        createTodoItem('Make Awesome App', true),
        createTodoItem('Have a lunch'),
    ]
    const [data, setData] = useState(todoData)
    const searchItems = (items, searchItem) => {
        if(searchItem.length === 0) {
            return items
        }
        return items.filter(item => item.label.toLowerCase().indexOf(searchItem.toLowerCase()) > -1)
    }
    const [defaultSearchValue, setSearchValue] = useState('')
    const [filter, setFilter] = useState('all')
    const activeDoneFilter = (items, filter) => {
        switch(filter) {
            case 'all': 
                return items;
            case 'active':
                return items.filter(item => !item.done);
            case 'done': 
                return items.filter(item => item.done);
            default: 
                return items;
        }
    }
    const visibleItems = activeDoneFilter(searchItems(data, defaultSearchValue), filter)
    const toggleProperty = (arr, id, propName) => {
        const index = arr.findIndex(el => el.id === id)
        const oldItem = arr[index]
        const done = {
            ...oldItem,
            [propName]: !oldItem[propName],
        }
        const newArr = [
            ...arr.slice(0, index),
            done,
            ...arr.slice(index + 1)
        ]
        return newArr
    }
    const onToggleDone = id => {
        setData(toggleProperty(data, id, 'done'))
    }
    const onToggleImportant = id => {
        setData(toggleProperty(data, id, 'important'))
    }
    const delTask = id => {
        const newArr = data.filter(el => el.id !== id)
        setData(newArr)
    }
    const addTask = text => {
        setData([
            ...data,
            createTodoItem(text)
        ])
    }
    const doneCount = data.filter(el => el.done).length
    const todoCount = data.length - doneCount
    
    return (
        <div className="bg">
            <div className="App">
                <div className="app-bg">
                    <AppHeader toDo={todoCount} done={doneCount} />
                    <div className="top-panel d-flex">
                        <SearchPanel setValue={setSearchValue}/>
                        <ItemStatusFilter filter={filter} setfilter={setFilter}/>
                    </div>
                    <TodoList delTask={delTask} onToggleDone={onToggleDone} onToggleImportant={onToggleImportant} todos={visibleItems}/>
                    <ItemAddForm addTask={addTask} setData={setData}/>
                </div>    
            </div>
        </div>
    ) 
}