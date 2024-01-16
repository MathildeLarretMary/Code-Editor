import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Layout/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Créé les routes */}
        <Routes>
          {/* Créé une route au path '/' qui va render la page HomePage*/}
          <Route path='/' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
