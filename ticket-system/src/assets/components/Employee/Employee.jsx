import React, { useState } from 'react';
import "./Employee.scss";

const Employee = ({teamArr}) => {

    const listOfEmployees = teamArr.map((teamMember, index) => {
        return (
            <div className="team__employee-card" key={teamMember.id}>
                <p>Name: {teamMember.name}</p>
                <p>Role: {teamMember.role}</p>  
            
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