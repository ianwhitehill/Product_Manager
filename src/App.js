import './App.css';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Add from './views/Add';
import Detail from "./views/Detail";
import Update from "./views/Update";


function App() {
  return (
    <div>
      <Navbar/>
      <Router>
        <Home path='/'/>
        <Add path='/product/add'/>
        <Detail path='/product/:_id'/>
        <Update path='/product/update/:_id'/>
      </Router>
    </div>
  );
}

export default App;
