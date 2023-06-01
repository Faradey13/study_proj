import {FC, useMemo} from "react";
import {pgArray} from "../../util/pages";

export interface UsePaginationProps {
    totalPages:number;
    pgArray: (arg0:number) => []
    page: number
}

export const usePaginations = (totalPages: number) => {
    const pagesArray = useMemo(()=> pgArray(totalPages),[totalPages])
    return pagesArray
}