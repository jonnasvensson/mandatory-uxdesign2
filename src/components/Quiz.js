import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import axios from 'axios';

import './Quiz.css'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Dialog from './Dialog'
import { updateResultsFromLocalStorage, result$ } from './Store'


export default function Quiz() {
    const [trivia, setTrivia] = useState([]);
    const [answer, setAnswer] = useState('');
    const [modalActive, setmodalActive] = useState(false);
    const [currentScore, setCurrentScore] = useState(null);
    const [showQuiz, setshowQuiz] = useState(false);

    const defaultValues = {
        '0': '',
        '1': '',
        '2': '',
        '3': '',
        '4': '',
        '5': '',
        '6': '',
        '7': '',
        '8': '',
        '9': '',
    };

    const { register, handleSubmit, reset } = useForm({ defaultValues });

    const deactivateModal = () => {
        setmodalActive(false);
    }

    const handleExit = () => {
        deactivateModal();
        updateResultsFromLocalStorage(null);
        reset(defaultValues);
        setshowQuiz(false);
    }

    const handleRestart = () => {
        handleAxios();
        deactivateModal();
        reset(defaultValues);
    }

    const onSubmit = (data, e) => {
        e.preventDefault();
        setAnswer(data);
        let score = checkAnswers(data);
        setCurrentScore(score);
        setmodalActive(true);
    };


    function checkAnswers(answers) {
        let count = 0;

        for (let i = 0; i < trivia.length; i++) {
            if (trivia[i].correct_answer === answers[i]) {
                count++;
            }
        }

        let newResults = { ...result$.value };  // --> updatedResult from localstorage.
        newResults.gamesPlayed++;
        newResults.correctAnswers += count;
        newResults.incorrectAnswers += trivia.length - count;
        updateResultsFromLocalStorage(newResults);
        return count;
    }

    function handleAxios() {
        axios
            .get("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")
            .then((respons) => {
                setTrivia(respons.data.results);
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        handleAxios();
    }, [])

    let number = 0;

    const mappedTrivia = trivia.map((questions, i) => {
        const nr = i += 0;
        let correct = [];
        correct.push(questions.correct_answer);
        let incorrect = questions.incorrect_answers;
        let concatinatedAnswers = correct.concat(incorrect);
        number++;

        concatinatedAnswers.sort(() => Math.random() - 0.5);

        const entities = {
            '&#039;': "'",
            '&quot;': '"',
            '&ldquo;': '“',
            '&rdquo;': '”',
            "&ntilde;": "ñ",
            "&eacute;": "é",
            "&amp;": "&",
            "&uuml;": "ü"
        }
        return (
            <>
                <Card.Text as="li" tabIndex="1" action="true" href={questions.question} key={nr} aria-label={questions.question} aria-required="true">{number}. {questions.question.replace(/&#?\w+;/g, match => entities[match])}</Card.Text>
                <div>
                    {
                        concatinatedAnswers.map((option, j) => {
                            const uniqueKey = `${nr}${j}`;
                            return (
                                <React.Fragment key={uniqueKey}>
                                    <Card.Text>
                                        <input type="radio" tabIndex="1" required aria-label={option} id={nr + option} name={i} value={option} ref={register({ required: true })} reset={defaultValues} />
                                        <label htmlFor="answer">{option}</label>
                                    </Card.Text>
                                </React.Fragment>
                            )
                        })
                    }
                </div>
            </>
        )
    })


    return (
        <>
            {showQuiz ?
                <div className="container d-flex flex-column align-items-center">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Card role="list" >
                            <Card.Body as="ul" variant="flush" >
                                <Card.Title className="text-center" aria-label="Questions" tabIndex="1"><h3>Questions</h3></Card.Title>
                                {mappedTrivia}
                            </Card.Body>
                        </Card>
                        <div className="container d-flex flex-column align-items-center" >
                            <Button variant="info" type="submit" ref={register} onClick={handleSubmit}>Submit</Button>{' '}
                        </div>
                    </form>
                    {modalActive ? <Dialog currentScore={currentScore} handleRestart={handleRestart} handleExit={handleExit} deactivateModal={deactivateModal} setmodalActive={setmodalActive} /> : null}
                </div> : <div className="container d-flex flex-column align-items-center">
                    <Button id="start-btn" onClick={() => setshowQuiz(true)}>
                        <h4>Start quiz</h4></Button>
                </div>
            }
        </>
    )
}
