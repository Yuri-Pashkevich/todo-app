import React from 'react';
import '../styles/item-status-filter.scss';

export const ItemStatusFilter = ({ filter, setfilter }) => {
    const buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ]
    const elements = buttons.map(({ name, label }) => {
        const isActive = filter === name
        const addClass = isActive ? 'btn-info' : 'btn-outline-secondary'
        const filterItems = () => {
            setfilter(name)
        }
        return <button type="button" className={`btn ${addClass}`} key={name} onClick={filterItems}>{label}</button>
    })
    return (
        <div className="btn-group">
            {elements}
        </div>
    );
};

