import React from "react";

export interface IPost {
    id: string;
    title: string;
    body: string;

}
export interface IComment {
    id: number;
    name: string;
    email: string;
    body: string;
}
export interface IFilter {
    sort?: keyof IPost | undefined
    query?: keyof IPost | undefined

}
export interface IComment {
    email : string
    body:string

}

export interface IContext {
    isAuth: boolean;
    isLoading: boolean;
    setIsAuth: React.Dispatch<boolean>;
    setIsLoading: React.Dispatch<boolean>;



}
