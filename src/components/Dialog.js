import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import AriaModal from 'react-aria-modal';
import Button from 'react-bootstrap/Button'

export default function Dialog({ currentScore, deactivateModal, handleRestart }) {
    return (
        <AriaModal
            titleText="demo one"
            onExit={deactivateModal}
            initialFocus="#demo-one-deactivate"
            underlayStyle={{ paddingTop: '2em' }}
        >
            <div id="demo-one-modal" className="modal" style={{ display: "block" }}>
                <div className="modal-body">
                    <Card>
                        <Card.Body>
                            <h2>Results</h2>
                            <p>Your total score from the quiz is: {currentScore} </p>
                            <div className="container d-flex justify-content-between">
                                <Button id="demo-one-deactivate" onClick={deactivateModal}>
                                    Exit game!
                            </Button>
                                <Button id="demo-one-deactivate" onClick={handleRestart} >
                                    Restart quiz
                            </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </AriaModal>
    )
}
