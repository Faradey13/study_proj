import React, {FC} from 'react';
import {IPost} from "../types/types";
import MyButton from "./UI/Button/MyButton";
import { useNavigate } from "react-router-dom";

export interface PostItemProps {

    title: string;
    body: string;
    post: IPost
    number: number;

    remove?: (arg0: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({ title, body,  remove, post,number }) => {
    const navigate = useNavigate()

    return (
        <div  className='post'>
            <div className='post_content'>
                <h1>
                    {post.id}.{title}
                </h1>
                <div>{body}</div>
            </div>
            <div>
                <MyButton onClick={()=>navigate(`/posts/${post.id}`)}  children={'Открыть'}/>
                <MyButton onClick={()=> remove && remove(post)} children={'Удалить'}/>
            </div>
        </div>
    );
};

export default PostItem;