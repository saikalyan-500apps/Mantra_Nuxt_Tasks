// store/routepage
import { defineStore } from "pinia";

export const useRouteStore = defineStore('routes',() => {
    const LeftRouteLinks = [
        {
            id:1,
            route : '/',
            name:'Home'
        },
        {
            id:4,
            route : '/game',
            name : 'Game'
        }]
    const RightRouteLinks = [
        {
            id:1,
            route : '/register-form',
            name :'Register'
        },
        {
            id:2,
            route : '/login-form',
            name : 'Login'
        }
    ]
    const ApiRouteLink = [
        {
            id:1,
            route : '/weather',
            name:'Weather'
        },
        {
            id:2,
            route : '/currency-exchange',
            name:'Currency'
        },
        {
            id:3,
            route : '/movie',
            name:'Movie'
        }
    ]
    return { LeftRouteLinks, RightRouteLinks, ApiRouteLink };
})