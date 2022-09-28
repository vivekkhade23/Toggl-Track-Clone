import './App.css';
<<<<<<< HEAD
import Signup from './components/LoginSignup/Signup';
// import { ProjectBudgeting } from './components/project_budgeting/ProjectBudgeting';

function App() {
  return (
    <div className="App">   
     {/* <ProjectBudgeting/> */}
     <Signup/>
=======
import { ProjectBudgeting } from './components/project_budgeting/ProjectBudgeting';
import WithSubnavigation from './components/navbar/Navbar';
import WithAction from './components/navbar/Navbartop';

function App() {
  return (
    <div className="App">
     
     <WithSubnavigation/>
    
     
>>>>>>> main
    </div>
  );
}

export default App;
