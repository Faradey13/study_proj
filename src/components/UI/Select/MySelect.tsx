import React, {FC, ChangeEvent, SelectHTMLAttributes} from 'react';

import {IPost} from "../../../types/types";

interface options {
    value: string
    name: string;

}
interface MySelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: options[]
    styleComponent: React.CSSProperties
}

const MySelect:FC<MySelectProps> = ({styleComponent, defaultValue, options, value, onChange}) => {

    return (
        <select style={styleComponent} value={value} onChange={ (event) => {onChange && onChange(event)}}>
            <option value="">{defaultValue}</option>
            {options.map(option=> <option key={option.value} value={option.value}>{option.name}</option>)}
        </select>
    );
};

export default MySelect;