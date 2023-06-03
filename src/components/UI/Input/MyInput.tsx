import React, {FC, InputHTMLAttributes} from 'react';
import cl from './input.module.css'


interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
}


const MyInput: FC<MyInputProps> = ({placeholder, value, type, onChange}) => {
    return (
        <input onChange={event => onChange && onChange(event)} className={cl.input} type={type}
               placeholder={placeholder}/>

    );
};

export default MyInput;