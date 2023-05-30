import React, {FC, useEffect, useState} from 'react';
import {IFilter, IPost} from "../types/types";


import PostService from "../API/PostService";

import {usePosts} from "../components/hooks/usePosts";
import Filter from "../components/Filter";
import MyButton from "../components/UI/Button/MyButton";
import PostForm from "../components/postForm";
import PostList from "../components/PostList";
import Modal from "../components/UI/Modal/modal";
import Loader from "../components/UI/Loader/Loader";

const PostsPage: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    const  [filter, setFilter] = useState<IFilter>({sort: undefined, query: undefined})
    const [modal, setModal] = useState<boolean>(false)




    const searchedAndSortedPosts = usePosts({sort: filter.sort, query: filter.query, posts: posts})


    const fetchPosts = async () => {
        const response = await PostService.getAll()
        setPosts(response.data)
    }

    useEffect(() => {
        fetchPosts()
    },[])


    const removePost = (post: IPost)   => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const createPost:(arg0: IPost)=> void= (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    return (
        <div>
          <Filter filter={filter} setFilter={setFilter} />
            <Modal visible={modal} setVisible={setModal} children={<PostForm create={createPost}/>}/>

            <Loader/>

            <MyButton onClick={() => setModal(true)} children={"Создать пост"}/>

            <PostList remove={removePost} posts={searchedAndSortedPosts} title={"Список постов"}/>

        </div>
    );
};

export default PostsPage;