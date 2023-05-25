import {IFilter, IPost} from "../../types/types";
import {FC, useMemo} from "react";

interface usePostProps {
    posts: IPost[];
    sort?: keyof  IPost | undefined
    query?: string
    ''?: string

}


export const useSortedPost = ({posts, sort}:usePostProps) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts
    },[posts, sort])

    return sortedPosts
}
export const usePosts  = ({sort, query, posts}:usePostProps) => {
    const sortedPost = useSortedPost({posts, sort})

    const searchedAndSortedPost = useMemo(()=>{
        if (query)
    return sortedPost.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    },[query, sortedPost])

    return searchedAndSortedPost
}