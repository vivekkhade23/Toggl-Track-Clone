import AllRoutes from './Allroutes/AllRoutes';
import './App.css';
import Signup from './components/LoginSignup/Signup';
import WithSubnavigation from './components/navbar/Navbar';
// import { ProjectBudgeting } from './components/project_budgeting/ProjectBudgeting';

function App() {
  return (
    <div className="App">
      {/* <ProjectBudgeting/> */}
      <WithSubnavigation />
      <AllRoutes />
      {/* <Signup/> */}
    </div>
  );
}

export default App;
