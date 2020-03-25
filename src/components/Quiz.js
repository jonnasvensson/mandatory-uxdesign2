import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Quiz() {
    const [trivia, setTrivia] = useState([]);

    function handleAxios() {
        axios
            .get("https://opentdb.com/api.php?amount=10&type=boolean")
            .then((respons) => {
                setTrivia(respons.data.results);
                console.log(respons.data.results);
            })

            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        handleAxios();
    }, [])

    console.log(trivia);
    
    return (
        <div className="container d-flex flex-column justify-content-center">
            <h2 className="text-center">Questions!</h2>
            <div className="container">
                <ul >
                    {
                        trivia.map((question, i) => {
                            return <li key={i}>{question.question}
                                <input type="radio" name={i}/>
                                <label htmlFor="">True</label>
                                <input type="radio" name={i}/>
                                <label htmlFor="">False</label>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}