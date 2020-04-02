import React from 'react';

import Card from 'react-bootstrap/Card'
import { updateResultsFromLocalStorage, result$ } from './Store';


export default function Stats() {
    if (!result$.value) {
    updateResultsFromLocalStorage({
        gamesPlayed: 0,
        correctAnswers: 0,
        inCorrectAnswers: 0,
        })
    };
    return (
        <div className="container d-flex flex-column align-items-center">
            <Card role="list" style={{ width: '24rem' }}>
                <Card.Body as="ul" variant="flush" >
                    <Card.Title className="text-center">Stats</Card.Title>
                    <Card.Text aria-label>
                        <p>{result$.value.gamesPlayed}</p>
                        
                        Statistics is the discipline that concerns the collection,
                        organization, analysis, interpretation and presentation
                        of data.[1][2][3] In applying statistics to a scientific,
                        industrial, or social problem, it is conventional to begin
                        with a statistical population or a statistical model to be
                        studied. Populations can be diverse groups of people or
                        objects such as "all people living in a country" or
                        "every atom composing a crystal". Statistics deals
                        with every aspect of data, including the planning of
                        data collection in terms of the design of surveys and
                        experiments.[4] See glossary of probability and statistics.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}