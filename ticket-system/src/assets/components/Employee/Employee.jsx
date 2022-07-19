import React, { useState } from 'react';
import "./Employee.scss";

const Employee = ({teamArr}) => {

    const [team, setTeam] = useState(teamArr);

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

    const listOfEmployees = team.map((teamMember, index) => {
        return (
            <div className="team__employee-card" key={teamMember.id}>
                <p className="team__employee-card-text">Name:</p>
                <p className="team__employee-card-text team__employee-card-text--special">{teamMember.name}</p>
                <p className="team__employee-card-text">Role:</p>
                <p className="team__employee-card-text team__employee-card-text--special">{teamMember.role}</p>  
                <p className="team__employee-card-text">Ticket:</p>
                <p className="team__employee-card-text team__employee-card-text--special">{ticket[index][teamMember.id]}</p>
                <button className="team__employee-card-button" onClick={() => handlePlusButtonClick(teamMember, index)}>+</button>
                <button className="team__employee-card-button" onClick={() => handleMinusButtonClick(teamMember, index)}>-</button>
            </div>
        );
    })

    const filterRole = (event) => {
        const filteredTeam = teamArr.filter(teamMember => {
            if (teamMember.role.toLowerCase().includes(event.target.value.toLocaleLowerCase())) {
                return teamMember;
            }
        })
        setTeam(filteredTeam);
    }

    const filterName = (event) => {
        const filteredTeam = teamArr.filter(teamMember => {
            if (teamMember.name.toLowerCase().includes(event.target.value.toLocaleLowerCase())) {
                return teamMember;
            }
        })
        setTeam(filteredTeam);
    }

    return (
        <>
            <div className="team__filter">
                <h2 className="team__filter-title">Filter</h2>
                <label className="team__filter-label" htmlFor="role">By Role</label><br />
                <input type="text" id="role" onChange={filterRole}/>
                <br />
                <label className="team__filter-label" htmlFor="name">By Employee</label><br />
                <input type="text" id="name" onChange={filterName}/>
            </div>
            <div className="team__employee">
                {listOfEmployees}
            </div>
        </>
    );
}

export default Employee;