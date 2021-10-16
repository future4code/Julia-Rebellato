import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <div>
                <h4>{ props.chamada }</h4>
                <h4>{ props.email }</h4>
            </div>
        </div>
    )
}

export default CardPequeno;