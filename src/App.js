
import './App.css';
import { Home } from "./component/Home";
import CartPage from "./component/CartPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './component/Menu';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/mainMenu' element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
