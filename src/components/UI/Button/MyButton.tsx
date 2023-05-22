import React, {ButtonHTMLAttributes, FC} from 'react';
import classes from "./ButtonStyle.module.css";
interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
children: React.ReactNode;
className? : string;


}
const MyButton:FC<MyButtonProps> = ({children}) => {
    return (

            <button className={classes.my_button}>
                {children}
            </button>

    );
};

export default MyButton;