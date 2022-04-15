import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './componants/Header/Header';
import Home from './componants/Home/Home';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
