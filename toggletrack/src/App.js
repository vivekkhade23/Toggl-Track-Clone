import AllRoutes from './Allroutes/AllRoutes';
import './App.css';
import WithSubnavigation from './components/navbar/Navbar';


function App() {
  return (
    <div className="App">
      <WithSubnavigation />
      <AllRoutes />
  
    </div>
  );
}

export default App;
