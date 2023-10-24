import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./compenents/dashboard";

import Buttons from "./compenents/buttons";
import Cards from "./compenents/cards";
import Colors from "./compenents/colors";
import Border from "./compenents/border";
import Error from "./compenents/error";
import Animation from "./compenents/animation";
import Others from "./compenents/others";
import Login from "./compenents/loginPage";
import Register from "./compenents/registerPage";
import Reset from "./compenents/forgotPassword";
import Table from './compenents/table';
import BlankPage from "./compenents/blank";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/borders" element={<Border />} />
          <Route path="/animation" element={<Animation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/others" element={<Others />} />
          <Route path="/nopage" element={<Error />} />
          <Route path="/blank" element={<BlankPage />} />
          <Route path='/table' element={<Table/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
