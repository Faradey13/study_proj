import React, {FC} from 'react';
import {IPost} from "../types/types";
import PostItem from "./PostItem";


export interface PostListProps {
    posts: IPost[];
    title: string;
    remove?: (arg0: IPost) => void
}
const PostList:FC<PostListProps> = ({posts, title, remove}) => {
    return (
        <div>
            <h1>{title}</h1>
            {
                posts.map((post, index) => <PostItem key={post.id} post={post} remove={remove} number={index+1} title={post.title} body={post.body} />)
            }
        </div>
    );
};

export default PostList;