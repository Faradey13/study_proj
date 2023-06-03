import React, {FC} from 'react';
import {IPost} from "../types/types";
import PostItem from "./PostItem";
import {TransitionGroup, CSSTransition} from "react-transition-group";


export interface PostListProps {
    posts: IPost[];
    title: string;
    remove?: (arg0: IPost) => void
}
const PostList:FC<PostListProps> = ({posts, title, remove}) => {
    return (
        <div>
            <h1>{title}</h1>
            <TransitionGroup>
                {
                    posts.map((post, index) =>
                        <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                    <PostItem  post={post} remove={remove} number={index+1} title={post.title} body={post.body} />
                    </CSSTransition>)
            }
            </TransitionGroup>
        </div>
    );
};

export default PostList;