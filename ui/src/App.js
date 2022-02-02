import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return(
   
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )

}

export default App;
