import {useEffect, useState} from "react";


type TUseFetchingReturnType = [()=> Promise<void>, boolean, string|undefined]

export const useFetching = (callback: ()=> void):TUseFetchingReturnType => {
    const[isLoading, setIsLoading] = useState<boolean>(false)
    const[error, setError] = useState('')

    const fetching = async() => {
try {
    setIsLoading(true)
    await callback()
} catch (e) {
    setError((e as Error).message)
} finally {
setIsLoading(false)
}

    }
    return [fetching, isLoading, error]
}