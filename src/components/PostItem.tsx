import React, {FC} from 'react';
import {IPost} from "../types/types";
import MyButton from "./UI/Button/MyButton";

export interface PostItemProps {

    title: string;
    body: string;
    post: IPost
    number: number;

    remove?: (arg0: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({ title, body,  remove, post,number }) => {

    return (
        <div  className='post'>
            <div className='post_content'>
                <h1>
                    {number}.{title}
                </h1>
                <div>{body}</div>
            </div>
            <div>
                <MyButton  children={'Открыть'}/>
                <MyButton onClick={()=> remove && remove(post)} children={'Удалить'}/>
            </div>
        </div>
    );
};

export default PostItem;