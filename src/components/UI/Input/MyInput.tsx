import React, {FC, InputHTMLAttributes} from 'react';
import cl from './input.module.css'
import MySelect from "../Select/MySelect";
interface MyInputProps extends InputHTMLAttributes<HTMLInputElement>{}





const MyInput:FC<MyInputProps> = ({placeholder,value, type, onChange}) => {
    return (
        <input className={cl.input} type={type} placeholder={placeholder}/>

    );
};

export default MyInput;