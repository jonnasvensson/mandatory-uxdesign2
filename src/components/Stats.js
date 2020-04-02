import React from 'react';

import Card from 'react-bootstrap/Card'
import { updateResultsFromLocalStorage, result$ } from './Store';


export default function Stats() {
    if (!result$.value) {
    updateResultsFromLocalStorage({
        gamesPlayed: 0,
        correctAnswers: 0,
        incorrectAnswers: 0,
        })
    };
    return (
        <div className="container d-flex flex-column align-items-center">
            <Card role="list" style={{ width: '24rem' }}>
                <Card.Body as="ul" variant="flush" >
                    <Card.Title className="text-center" aria-label="Stats" tabIndex="1"><h3 style={{fontFamily: 'Roboto'}}>Stats</h3></Card.Title>
                    <Card.Text aria-label="Games played" tabIndex="1">Games played</Card.Text>
                    <Card.Text aria-label="Stats" tabIndex="1">{result$.value.gamesPlayed}</Card.Text>
                    <Card.Text aria-label="Correct answers" tabIndex="1">Correct answers</Card.Text>
                    <Card.Text aria-label="Stats" tabIndex="1">{result$.value.correctAnswers}</Card.Text>
                    <Card.Text aria-label tabIndex="1">Incorrect answers</Card.Text>
                    <Card.Text aria-label="Incorrect answers" tabIndex="1" >{result$.value.incorrectAnswers}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}