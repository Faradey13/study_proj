import React, {FC, ChangeEvent, SelectHTMLAttributes} from 'react';

import {IPost} from "../../../types/types";

interface options {
    value: string | number
    name: string;

}

interface MySelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: options[]

}

const MySelect: FC<MySelectProps> = ({defaultValue, options, value, onChange}) => {

    return (
        <select value={value} onChange={(event) => {
            onChange && onChange(event)
        }}>
            <option disabled value="">{defaultValue}</option>
            {options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}
        </select>
    );
};

export default MySelect;