import "./App.scss";
import team from "./data/team.js";
import Nav from "./assets/components/Nav/Nav";
import Employee from "./assets/components/Employee/Employee.jsx";


const App = () => {

    return ( 
        <>
            <Nav title="Ticket Tracker" />
            <div className="team">
                <Employee teamArr={team} />
            </div>
        </>
    );
}

export default App;
