import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddProject from './components/Project/AddProject';

function App() {
  return (
    <Router>
    <div className="App">
    <Header />
     <Dashboard/>
     <Route exact path="/addProject" Component={AddProject}/>
    </div>
    </Router>
  );
}

export default App;
