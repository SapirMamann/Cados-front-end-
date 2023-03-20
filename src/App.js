import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import AdvocatePage from './pages/AdvocatePage';
import HomePage from './pages/HomePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<HomePage/>} path="" />
        <Route element={<AdvocatePage/>} path="/advocates/:username" />
      </Routes>
    </Router>
  );
}

export default App;
