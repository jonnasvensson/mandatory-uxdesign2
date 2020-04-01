import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav'

import './Main.css'
import './Sidebar.css'

import Header from './Header'
import Sidebar from './Sidebar'
import Quiz from './Quiz'


export default function Main() {
    const [isOpen, setIsOpen] = useState(false);

    const onClickMenuButton = () => {
        setIsOpen(true);
        console.log(isOpen);
    }

    return (
        <>
            <Header onClickMenuButton={onClickMenuButton} />
            <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)}/>
        </>
    )
}

