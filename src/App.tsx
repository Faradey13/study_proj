import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


import './styles/App.css';


import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

function App() {

const[isAuth, setIsAuth] =useState<boolean>(false)
const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(()=>{
        if(localStorage.getItem('auth')){
            setIsAuth(true)
            setIsLoading(false)
        }
    },[])

  return (
      <AuthContext.Provider value={
          {
              isAuth,
              setIsAuth,
              isLoading,
              setIsLoading
          }

      }>
<div className='App'>
      <BrowserRouter>
          <Navbar/>
          <AppRouter/>
      </BrowserRouter>
</div>
      </AuthContext.Provider>
  );
}

export default App;
