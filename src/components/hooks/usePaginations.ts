import {useMemo} from "react";
import {pgArray} from "../../utils/pages";



export const usePaginations = (totalPages: number) => {
    const pagesArray = useMemo(() => pgArray(totalPages), [totalPages])
    return pagesArray
}