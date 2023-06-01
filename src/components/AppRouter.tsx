import React, {useContext} from 'react';
import {routeConfig, routeConfigPublic} from "../router/routes";
import {Route, Routes} from "react-router-dom";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading) {
       return <Loader/>
    }

    return (
        isAuth ?
        <Routes>
            {Object.values(routeConfig).map(({element, path}) =>(
                <Route
                    key={path}
                    path={path}
                    element={<div className='wPage'>{element}</div>}
                />
            ))}

        </Routes>
            :
            <Routes>
            {Object.values(routeConfigPublic).map(({element, path}) => (
                    <Route
                        key={path}
                        path={path}
                        element={<div className='wPage'>{element}</div>}
                    />

                ))}
            </Routes>
    );
};

export default AppRouter;