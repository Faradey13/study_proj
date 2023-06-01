import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../components/hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import {IComment, IPost} from "../types/types";



const PostById:FC= () => {
   const params = useParams()

    const[post, setPost] = useState<IPost>()

    const[comment, setComment] = useState<IComment[]>()

    const [fetchPostById, isLoadingPostId, errorPostId] = useFetching(async () => {
        const response = await PostService.getPostById(params.id)
        setPost(response.data)
    })

    const[fetchComment, isLoadingComment, errorComment] = useFetching(async ()  => {
        const response = await PostService.getCommentById(params.id)
        setComment(response.data)
    })

    useEffect(()=> {
        fetchPostById()
        fetchComment()
    },[])

    return (
        <div>
            {isLoadingPostId ? <Loader/> :
                <h2>{params.id}.{post && post.title}</h2>
            }
            <h1>Комментарии</h1>
            {
                isLoadingComment ? <Loader/> :
                    <div>
                        {comment && comment.map(comm =>
                            <div>
                                <h5>{comm.email}</h5>
                                <div>{comm.body}</div>
                            </div>
                        )}
                    </div>
            }

        </div>
    );
};

export default PostById;