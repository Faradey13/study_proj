import {useState} from "react";


type TUseFetchingReturnType = [(...args:any[]) => Promise<void>, boolean, string | undefined]

export const useFetching = (callback: (...args: any[]) => void): TUseFetchingReturnType => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState('')

    const fetching = async (...args:any[]) => {
        try {
            setIsLoading(true)
            await callback(...args)
        } catch (e) {
            setError((e as Error).message)
        } finally {
            setIsLoading(false)
        }

    }
    return [fetching, isLoading, error]
}