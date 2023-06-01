import React, {useContext} from 'react';
import cls from "./NavbarStyle.module.css";
import MyButton from "../Button/MyButton";
import {AuthContext} from "../../../context";
import {IContext} from "../../../types/types";

const Navbar = () => {

    const {setIsAuth} = useContext<IContext>(AuthContext)
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className={cls.navbar}>
<div>
    <MyButton children={'Login'} />
    <MyButton children={'Logout'} onClick={logout}/>

</div>
        </div>
    );
};

export default Navbar;