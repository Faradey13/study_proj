import {useEffect, useState} from "react";




export const useFetching = (callback: Promise<void>) => {
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