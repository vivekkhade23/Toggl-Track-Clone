import AllRoutes from './Allroutes/AllRoutes';
import './App.css';
import LargeWithLogoCentered from './components/footer/footer';
import Signup from './components/LoginSignup/Signup';
import WithSubnavigation from './components/navbar/Navbar';
// import { ProjectBudgeting } from './components/project_budgeting/ProjectBudgeting';

function App() {
  return (
    <div className="App">
      {/* <ProjectBudgeting/> */}
      <WithSubnavigation />
      <AllRoutes />
      {/* <LargeWithLogoCentered/> */}
      {/* <Signup/> */}
    </div>
  );
}

export default App;
