import React,{useState} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Reservation from "./pages/Reservation";  
import Cart from "./pages/Cart";  
import Plate from "./pages/Plate";
import { ThemeContext } from './context/DarkContext';
import "./styles.css";


const App = () => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>    
        <div className={`theme-${theme}`}>
            <Routes>
              <Route  exact path="/" element={<Home /> }  />
              <Route  path="/Home" element={<Home /> }  />
              <Route  path="/Cart" element={<Cart /> }  />
              <Route  path="/Menu" element={<Menu /> }  />
              <Route  path="/Menu/Plate/:id" element={<Plate /> }  />
              <Route  path="/Contact" element={<Contact /> }  />
              <Route  path="/Team" element={<Team /> }  />
              <Route  path="/Reservation" element={<Reservation /> }  />
            </Routes>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>

  );
}

export default App;
