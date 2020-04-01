import React, { useState } from 'react';
import './Header.css'

export default function Header({ onClickMenuButton }) {

    return (
        <header className="header">
            <button className="header__menu-button" onClick={onClickMenuButton} aria-label="Open menu" >
                <i className="header__menu-icon material-icons">menu</i>
            </button>
            <h1>Quiz</h1>
        </header>
    )
}
