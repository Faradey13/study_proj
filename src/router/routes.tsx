import PostsPage from "../pages/PostsPage";
import React from "react";
import About from "../pages/About";
import {RouteProps} from "react-router-dom";
import PostById from "../pages/PostById";
import Login from "../pages/Login";
import {pickPage} from "../util/router";

type privateType =  {private: boolean}
export enum AppRoute {
  POSTS= 'posts',
  POST = 'post',
  ABOUT = 'about',
  LOGIN = 'login',
  ERROR = 'error',

}

export enum AppRoutePublic {
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
export const RoutePathPublic:Record<AppRoutePublic, string> = {
    [AppRoute.LOGIN] : '/login',
    [AppRoute.ERROR] : '/*',

}
export const routeConfig:Record<AppRoute, privateType & RouteProps> = {
    [AppRoute.POSTS] : {
        path: RoutePath.posts,
        element: <PostsPage/>,
        private: false
    },
    [AppRoute.POST] : {
        path: RoutePath.post,
        element: <PostById/>,
        private: false
    },
    [AppRoute.ABOUT] : {
        path: RoutePath.about,
        element: <About/>,
        private: false
    },
    [AppRoute.LOGIN] : {
        path: RoutePath.login,
        element: <Login/>,
        private: true
    },
    [AppRoute.ERROR]: {
        path: RoutePath.error,
        element: <PostsPage/>,
        private: true
    }
}

export const routeConfigPublic:Record<AppRoutePublic, RouteProps> = {
    [AppRoute.LOGIN] : {
        path: RoutePath.login,
        element: <Login/>,
    },
    [AppRoute.ERROR]: {
        path: RoutePath.error,
        element: <Login/>,}
}

// export const routeConfigPublic1:Record<AppRoutePublic, privateType & RouteProps> =
//     Object.fromEntries((Object.entries(routeConfig).filter(
//         ([key, value]) => value.private)))