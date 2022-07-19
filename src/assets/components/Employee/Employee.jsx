import React, { useState } from 'react';
import "./Employee.scss";

const Employee = ({id, name, role}) => {

    const [ticket, setTicket] = useState(0);

    const handlePlusButtonClick = () => {
        setTicket(ticket+1);
    }

    const handleMinusButtonClick = () => {
        if (ticket > 0) {
            setTicket(ticket-1);
        }
    }

    return (
        <div className="team__employee-card" key={id}>
            <p className="team__employee-card-text">Name:</p>
            <p className="team__employee-card-text team__employee-card-text--special">{name}</p>
            <p className="team__employee-card-text">Role:</p>
            <p className="team__employee-card-text team__employee-card-text--special">{role}</p>  
            <p className="team__employee-card-text">Ticket:</p>
            <p className="team__employee-card-text team__employee-card-text--special">{ticket}</p>
            <button className="team__employee-card-button" onClick={() => handlePlusButtonClick()}>+</button>
            <button className="team__employee-card-button" onClick={() => handleMinusButtonClick()}>-</button>
        </div>
    );
}

export default Employee;