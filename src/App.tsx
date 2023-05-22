import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


import './styles/App.css';

import {routeConfig} from "./router/routes";
import Navbar from "./components/UI/Navbar/Navbar";

function App() {
  return (
<div className='App'>
      <BrowserRouter>
          <Navbar/>
          <Routes>
              {Object.values(routeConfig).map(({element, path}) =>(
                  <Route
                  key={path}
                  path={path}
                  element={<div className='wPage'>{element}</div>}
                  />
              ))}

          </Routes>
      </BrowserRouter>
</div>

  );
}

export default App;
