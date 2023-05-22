import PostsPage from "../pages/PostsPage";
import React from "react";
import About from "../pages/About";
import {RouteProps} from "react-router-dom";
import PostById from "../pages/PostById";
import Login from "../pages/Login";

export enum AppRoute {
  POSTS= 'posts',
  POST = 'post',
  ABOUT = 'about',
  LOGIN = 'login',
  ERROR = 'error'

}
export const RoutePath:Record<AppRoute, string> = {
    [AppRoute.POSTS] : '/posts',
    [AppRoute.POST]: '/posts/:id',
    [AppRoute.ABOUT] : '/about',
    [AppRoute.LOGIN] : '/login',
    [AppRoute.ERROR] : '/*',

}
export const routeConfig:Record<AppRoute, RouteProps> = {
    [AppRoute.POSTS] : {
        path: RoutePath.posts,
        element: <PostsPage/>,
    },
    [AppRoute.POST] : {
        path: RoutePath.post,
        element: <PostById/>,
    },
    [AppRoute.ABOUT] : {
        path: RoutePath.about,
        element: <About/>,
    },
    [AppRoute.LOGIN] : {
        path: RoutePath.login,
        element: <Login/>,
    },
    [AppRoute.ERROR]: {
        path: RoutePath.error,
        element: <PostsPage/>,
    }
}