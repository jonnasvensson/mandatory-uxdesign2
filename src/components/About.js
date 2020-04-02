import React from 'react';

import Card from 'react-bootstrap/Card'


export default function About() {
    return (
        <div className="container d-flex flex-column align-items-center">
            <Card role="list" style={{ width: '24rem' }}>
                <Card.Body as="ul" variant="flush" >
                <Card.Title className="text-center"><h3 style={{fontFamily: 'Roboto'}}>About</h3></Card.Title>
                    <Card.Text>
                        A quiz is a form of game or mind sport, 
                        in which the players (as individuals or in teams) 
                        attempt to answer questions correctly. 
                        It is a game to test the knowledge about a certain subject. 
                        In some countries, a quiz is also a brief assessment used 
                        in education and similar fields to measure growth in knowledge, 
                        abilities, and/or skills.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
