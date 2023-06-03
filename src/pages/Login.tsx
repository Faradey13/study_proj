import React, {useContext, useState} from 'react';
import MyInput from "../components/UI/Input/MyInput";
import MyButton from "../components/UI/Button/MyButton";
import {AuthContext} from "../context";



const Login = () => {
    const {setIsAuth} = useContext(AuthContext)
    const login = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')

    }

    return (

        <form onSubmit={login} style={{display: 'flex', flexDirection: 'column'}} action="">
            <div style={{display: 'flex', gap: '3px'}}>
                <MyInput type={'text'} placeholder={'Логин'}/>
                <MyInput type={'password'} placeholder={'Пароль'}/>
            </div>

            <MyButton children={'Войти'}/>
        </form>


    );
};

export default Login;