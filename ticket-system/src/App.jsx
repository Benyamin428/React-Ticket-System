import "./App.scss";
import team from "./data/team.js";
import Employee from "./assets/components/Employee/Employee.jsx";

const App = () => {

    return ( 
        <>
            <h1>Ticket Tracker</h1>
            <div className="team">
                <Employee teamArr={team} />
            </div>
        </>
    );
}

export default App;
