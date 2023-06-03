import React, {FC, SetStateAction, useEffect, useRef, useState} from 'react';
import {IFilter, IPost} from "../types/types";


import PostService from "../API/PostService";

import {usePosts} from "../components/hooks/usePosts";
import Filter from "../components/Filter";
import MyButton from "../components/UI/Button/MyButton";
import PostForm from "../components/postForm";
import PostList from "../components/PostList";
import Modal from "../components/UI/Modal/modal";
import Loader from "../components/UI/Loader/Loader";
import {useFetching} from "../components/hooks/useFetching";
import {getTotalPages} from "../util/pages";
import {usePaginations} from "../components/hooks/usePaginations";
import classes from "../components/UI/Button/ButtonStyle.module.css";
import Paginations from "../components/Paginations";
import {useObserve} from "../components/hooks/useObserve";
import MySelect from "../components/UI/Select/MySelect";

const PostsPage: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    const  [filter, setFilter] = useState<IFilter>({sort: undefined, query: undefined})
    const [modal, setModal] = useState<boolean>(false)

    const[totalPage, setTotalPage] = useState<number>(0)
    const[limit, setLimit] = useState<number>(10)
    const[page, setPage] = useState<number>(1)

    const lastElement = useRef(null)




    const searchedAndSortedPosts = usePosts({sort: filter.sort, query: filter.query, posts: posts})
    const [fetchPosts, isLoading, isError] = useFetching(async (limit: number, page: number) => {
        const response = await PostService.getAll(limit, page)
        const totalCount = response.headers['x-total-count']
        setTotalPage(getTotalPages(limit, totalCount))
        setPosts([...posts , ...response.data ])
    })

    const pagesArray = usePaginations(totalPage)

    useObserve(isLoading, page < totalPage, lastElement, () => {setPage(page+1)})


    useEffect(() => {
        fetchPosts(limit ,page)
        console.log(limit)
    },[page, limit])


    const removePost = (post: IPost)   => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const createPost:(arg0: IPost)=> void= (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const changePage = (page:number) =>{
        setPage(page)
    }

    return (
        <div>
            <Filter filter={filter} setFilter={setFilter} />
            <Modal visible={modal} setVisible={setModal} children={<PostForm create={createPost}/>}/>
            <MyButton  onClick={() => setModal(true)} children={"Создать пост"}/>
            <MySelect defaultValue={"Показывать по:"} value={limit} onChange={event  => setLimit(event.target.value)} options={[
                {value: 5, name: '5'},
                {value: 10, name: '10'},
                {value: 25, name: '25'},
                {value: -1, name: 'Показать все'},
            ]} />
            <PostList remove={removePost} posts={searchedAndSortedPosts} title={"Список постов"}/>
            <Paginations pagesArray={pagesArray} changePage={changePage} page={page}/>
            <div ref={lastElement}></div>



            {isLoading&& <Loader/>}
            {isError && <h1>{isError}</h1>}

        </div>
    );
};

export default PostsPage;