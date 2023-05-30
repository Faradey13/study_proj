import React, {FC, ChangeEvent, SelectHTMLAttributes} from 'react';

import {IPost} from "../../../types/types";

interface options {
    value: string
    name: string;
}
interface MySelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: options[]
}

const MySelect:FC<MySelectProps> = ({defaultValue, options, value, onChange}) => {

    return (
        <select style={{width: '200px', color: 'teal'}} value={value} onChange={ (event) => {onChange && onChange(event)}}>
            <option value="">{defaultValue}</option>
            {options.map(option=> <option key={option.value} value={option.value}>{option.name}</option>)}
        </select>
    );
};

export default MySelect;