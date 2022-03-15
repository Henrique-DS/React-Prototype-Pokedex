import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import NavBar from './Components/layout/NavBar';
import Dashboard from './Components/layout/Dashboard';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Dashboard/>
    </div>
  );
}

export default App;
