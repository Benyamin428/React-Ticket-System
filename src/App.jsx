import React, { useState } from 'react';
import "./App.scss";
import team from "./data/team.js";
import Nav from "./assets/components/Nav/Nav";
import Employee from "./assets/components/Employee/Employee.jsx";


const App = () => {

    const [teamArr, setTeamArr] = useState(team);

    const employees = teamArr.map(employee => {
        return <Employee key={employee.id} name={employee.name} role={employee.role} />
    })

    const filterRole = (event) => {
        const filteredTeam = team.filter(teamMember => {
            if (teamMember.role.toLowerCase().includes(event.target.value.toLowerCase())) {
                return teamMember;
            }
        })
        setTeamArr(filteredTeam);
    }

    const filterName = (event) => {
        const filteredTeam = team.filter(teamMember => {
            if (teamMember.name.toLowerCase().includes(event.target.value.toLowerCase())) {
                return teamMember;
            }
        })
        setTeamArr(filteredTeam);
    }

    return ( 
        <>
            <Nav title="Ticket Tracker" />
            <div className="team">
                <div className="team__filter">
                    <h2 className="team__filter-title">Filter</h2>
                    <label className="team__filter-label" htmlFor="role">By Role</label><br />
                    <input type="text" id="role" onChange={filterRole}/>
                    <br />
                    <label className="team__filter-label" htmlFor="name">By Employee</label><br />
                    <input type="text" id="name" onChange={filterName} />
                </div>

                <div className="team__employee">
                    {employees}
                </div>
            </div>
        </>
    );
}

export default App;
