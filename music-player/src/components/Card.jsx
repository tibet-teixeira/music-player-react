import React from 'react'
import { Link } from 'react-router-dom'

const Card = props => {
    return (
        <Link to={props.link} key={props.id}>
            <div className="card" key={props.id}>
                <div className="cardImage">
                    <img src={props.img} alt="Pic 1" />
                </div>
                <div className="cardContent">
                    <h3>{props.name}</h3>
                    <span>{props.desc}</span>
                </div>
            </div>
        </Link>
    )
}

export default Card
