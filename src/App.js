
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path='/' element={<LandingPage />} />
        <Route path='/homepage/:id' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
