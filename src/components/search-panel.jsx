import React from 'react'
import '../styles/search-panel.scss'

export const SearchPanel = ({ setValue }) => {
    const onChange = e => {
        setValue(e.target.value)
    }
    return <input type="text" onChange={onChange} className="form-control search-input" placeholder="Type to search"/>
}