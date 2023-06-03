import {IPost} from "../../types/types";
import {useMemo} from "react";

interface UsePostProps {
    posts: IPost[];
    sort?: keyof IPost
    query?: string


}


export const useSortedPost = ({posts, sort}: UsePostProps) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts
    }, [sort, posts])

    return sortedPosts
}
export const usePosts = ({sort, query, posts}: UsePostProps) => {
    const sortedPost = useSortedPost({posts, sort})

    const searchedAndSortedPost = useMemo(() => {
        if (query) {
            return sortedPost.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
        }
        return sortedPost
    }, [query, sortedPost])

    return searchedAndSortedPost
}