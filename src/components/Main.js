import React, { useState } from 'react';
import './Main.scss'
import Quiz from './Quiz'

import { Button } from 'react-bootstrap';


export default function Main() {
    const [showQuiz, setshowQuiz] = useState(false);
    
    const handleClick = () => {
        console.log('click');
        setshowQuiz( true );
    }

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center">
                {
                    showQuiz ? <Quiz/> : <Button variant="outline-secondary" onClick={handleClick}>Start Quiz</Button>
                }
            </div>
        </>
    )
}
