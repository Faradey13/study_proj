import {Dispatch, SetStateAction, useEffect, useState} from "react";

type UseHiddingRetyrnType = [boolean, Dispatch<SetStateAction<boolean>>]
export const useHidding = (nameKey: string): UseHiddingRetyrnType => {
    const [visibility, setVisibility] = useState<boolean>(false)


    useEffect(() => {
        const keyDownHandler = (event: KeyboardEvent) => {

            if (event.key === nameKey) {
                event.preventDefault()
                setVisibility(false)
            }

        }
        if (visibility) {
            document.addEventListener('keydown', keyDownHandler)
        }
        return () => {
            document.removeEventListener('keydown', keyDownHandler)
        }
    }, [visibility])
    return [visibility, setVisibility]
}