import React from 'react';

interface ListRenderProps<T>{
    item: T[];
    renderItem: (item: T) => React.ReactNode
}

export default function ListRender<T>(props: ListRenderProps<T>) {
    return (
        <div>
            {props.item.map(props.renderItem)}
        </div>
    )
}