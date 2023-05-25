import React, {FC, useEffect, useState} from 'react';
import {IFilter, IPost} from "../types/types";
import ListRender from "../components/ListRender";
import PostItem from "../components/PostItem";
import PostService from "../API/PostService";
import MyInput from "../components/UI/Input/MyInput";
import MySelect from "../components/UI/Select/MySelect";
import {usePosts} from "../components/hooks/usePosts";

const PostsPage: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    const  [filter, setFilter] = useState<IFilter>({sort: undefined, query: undefined})



    const searchedAndSortedPosts = usePosts({sort: filter.sort, query: filter.query, posts: posts})

    const fetchPosts = async () => {
        const response = await PostService.getAll()
        setPosts(response.data)
    }

    useEffect(() => {
        fetchPosts()
    },[])


    console.log(filter)

    return (
        <div>
            <MyInput
                placeholder={'Поиск...'}
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value as keyof IPost})}
            />
            <MySelect

                defaultValue={'поиск по'}
                options={[{value: 'title', name: 'по заголовку'},
                    {value: 'body', name: 'по содержимому'},
                ]}
                onChange={selectedSort =>

                    setFilter({...filter, sort: selectedSort.target.value as keyof IPost})

                }

                />
            <ListRender item={posts}
                        renderItem={(post) => <PostItem id={post.id} key={post.id} title={post.title}
                                                        body={post.body}/>}/>

        </div>
    );
};

export default PostsPage;