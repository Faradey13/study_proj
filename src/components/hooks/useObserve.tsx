import React, {useEffect, useRef} from "react";

export interface useObserveProps {
    isLoading: boolean;
    lastElement: React.MutableRefObject<any>
    callback: ()=> void
    canLoad: string
}
export const useObserve = (isLoading:boolean, canLoad: boolean, lastElement: React.MutableRefObject<any>, callback: ()=> void) => {
    const observer = useRef<IntersectionObserver | null>(null);
    useEffect(() => {
        if (isLoading) return
        if (observer.current) observer.current.disconnect()
        const cb = function(entries:IntersectionObserverEntry[], observer:IntersectionObserver) {
            if (entries[0].isIntersecting){
                callback()
            }

        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(lastElement.current)


    },[isLoading])
}