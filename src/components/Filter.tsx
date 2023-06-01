import React, {FC} from 'react';
import MyInput from "./UI/Input/MyInput";
import {IFilter, IPost} from "../types/types";
import MySelect from "./UI/Select/MySelect";

interface filterProps {
    query?: string
    filter: IFilter
    setFilter: React.Dispatch<React.SetStateAction<IFilter>>
}

const Filter:FC<filterProps> = ({filter, setFilter}) => {
    return (
        <div className= 'filter'>
            <MyInput
                placeholder={'Поиск...'}
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value as keyof IPost})}
            />
            <MySelect styleComponent={{width: '200px', color: 'teal'}}

                defaultValue={'поиск по'}
                options={[{value: 'title', name: 'по заголовку'},
                    {value: 'body', name: 'по содержимому'},
                ]}
                onChange={selectedSort =>

                    setFilter({...filter, sort: selectedSort.target.value as keyof IPost})

                }

            />

        </div>
    );
};

export default Filter;