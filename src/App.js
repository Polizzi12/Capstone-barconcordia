
import './App.css';
import BarMenu from './components/BarMenu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav';
import Home from './components/Home';
import Prenota from './components/Prenota';
import Prodotti from './components/Prodotti';


function App() {
  return (
    <Router>
    <div className="App">
      <HeaderNav/>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prodotti" element={<Prodotti/>} />
          <Route path="/prenota" element={<Prenota />} />
    </Routes>
    </div>
    </Router>
  );
}


export default App;
