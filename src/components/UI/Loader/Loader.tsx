import React from 'react';
import cl from './loader.module.css'

const Loader = () => {
    return (
        <div className={cl.loader_wrapper}>
            <div className={cl.loader}>

            </div>
        </div>
    );
};

export default Loader;