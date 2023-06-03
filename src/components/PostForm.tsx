import React, {FC, MouseEventHandler, useState} from 'react';
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";
import {IPost} from "../types/types";

export interface PostFormProps {
    create: (arg0: IPost)=> void

}


const PostForm:FC<PostFormProps> = ({create}) => {
    const[post, setPost] = useState <Omit<IPost, "id">>({title: '', body: ''})


    const addNewPost: MouseEventHandler<HTMLButtonElement> = (event) => {
      event.preventDefault()
        const newPost: IPost = {
          id: String(Date.now()),
            ...post
        }

        create && create(newPost)
        setPost({title: '', body: ''})
        console.log(post)
    }


    return (
        <form className='form'>
            <div className='form__inputs'>
                <MyInput value={post.title} onChange={(event)=> setPost({...post, title: event.target.value})} placeholder={"Заголовок"}/>
                <MyInput style={{height: '60px'}} value={post.body} onChange={(event) => setPost({...post, body: event.target.value})} placeholder={"Текст"}/>
            </div>

            <MyButton className='form__button' onClick={addNewPost}  children={"Создать"}/>
        </form>
    );
};

export default PostForm;