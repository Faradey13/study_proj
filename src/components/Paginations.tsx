import React, {FC} from 'react';


export interface PaginationsProps {
    pagesArray: number[];
    changePage: (arg0:number)=> void
    page: number

}
const Paginations:FC<PaginationsProps> = ({pagesArray, changePage, page}) => {

    return (
        <div className={'page_wrap'}>
            {pagesArray.map(mapPage => <span onClick={()=>changePage(mapPage)} className={mapPage===page ? 'page_active' : 'page'} key={mapPage} >{mapPage}</span>)}
        </div>

    );
};

export default Paginations;