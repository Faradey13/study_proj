import {useEffect, useState} from "react";


type TUseFetchingReturnType = [(arg0?: number, arg1?: number)=> Promise<void>, boolean, string|undefined]

export const useFetching = (callback: (arg0: number, arg1: number)=> void):TUseFetchingReturnType => {
    const[isLoading, setIsLoading] = useState<boolean>(false)
    const[error, setError] = useState('')

    const fetching = async(limit?: number, page?: number) => {
try {
    setIsLoading(true)
    await callback(limit!, page!)
} catch (e) {
    setError((e as Error).message)
} finally {
setIsLoading(false)
}

    }
    return [fetching, isLoading, error]
}