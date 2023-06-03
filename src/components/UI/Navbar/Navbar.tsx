import React, {useContext} from 'react';
import cls from "./NavbarStyle.module.css";
import MyButton from "../Button/MyButton";
import {AuthContext} from "../../../context";
import {IContext} from "../../../types/types";
import {useNavigate} from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate()

    const {setIsAuth, isAuth} = useContext<IContext>(AuthContext)
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className={cls.navbar}>
            <div>
                {!isAuth ?
                    <MyButton onClick={() => navigate('/login')} children={'Login'}/>
                    :
                    <MyButton children={'Logout'} onClick={logout}/>
                }

            </div>
            <div>

                <MyButton onClick={() => navigate('/posts')} children={'Posts'}/>
                <MyButton onClick={() => navigate('/about')} children={'About'}/>
            </div>
        </div>
    );
};

export default Navbar;