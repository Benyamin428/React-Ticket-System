import React, { useState } from 'react';
import "./Employee.scss";

const Employee = ({teamArr}) => {

    const [ticket, setTicket] = useState([]);

    if (ticket.length !== teamArr.length) {
        teamArr.forEach(teamMember => {
            ticket.push({[teamMember.id]: 0}); 
        })
    }

    const handlePlusButtonClick = (teamMember, index) => {
        let newTicketArr = [...ticket];
        newTicketArr[index][teamMember.id] += 1;
        setTicket(newTicketArr);
    }

    const handleMinusButtonClick = (teamMember, index) => {
        let newTicketArr = [...ticket];
        if (newTicketArr[index][teamMember.id] > 0) {
            newTicketArr[index][teamMember.id] -= 1;
            setTicket(newTicketArr);
        }
    }

    const listOfEmployees = teamArr.map((teamMember, index) => {
        return (
            <div className="team__employee-card" key={teamMember.id}>
                <p>Name: {teamMember.name}</p>
                <p>Role: {teamMember.role}</p>  
                <p>{ticket[index][teamMember.id]}</p>
                <button onClick={() => handlePlusButtonClick(teamMember, index)}>+</button>
                <button onClick={() => handleMinusButtonClick(teamMember, index)}>-</button>
            </div>
        );
    })

    return (
        <>
            {listOfEmployees}
        </>
    );
}

export default Employee;