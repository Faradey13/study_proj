import React, {FC, useEffect, useState} from 'react';
import {IPost} from "../types/types";
import ListRender from "../components/ListRender";
import PostItem from "../components/PostItem";
import PostService from "../API/PostService";
import MyInput from "../components/UI/Input/MyInput";
import MySelect from "../components/UI/Select/MySelect";

const PostsPage: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    const  [filter, setFilter] = useState({sort: '', query: ''})


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
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect

                defaultValue={'поиск по'}
                options={[{value: 'title', name: 'по заголовку'},
                    {value: 'body', name: 'по содержимому'},
                ]}
                onChange={s =>

                    setFilter({...filter, sort: String (s)})

                }

                />
            <ListRender item={posts}
                        renderItem={(post) => <PostItem id={post.id} key={post.id} title={post.title}
                                                        body={post.body}/>}/>

        </div>
    );
};

export default PostsPage;