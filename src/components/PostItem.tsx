import React, {FC} from 'react';
import {IPost} from "../types/types";
import MyButton from "./UI/Button/MyButton";


const PostItem: FC<IPost> = ({id, title, body}) => {
    return (
        <div  className='post'>
            <div className='post_content'>
                <div>
                    {id}.{title}
                </div>
                <div>{body}</div>
            </div>
            <div>
                <MyButton children={'Открыть'}/>
                <MyButton children={'Удалить'}/>
            </div>
        </div>
    );
};

export default PostItem;