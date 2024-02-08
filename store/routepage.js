// store/routepage
import { defineStore } from "pinia";

export const useRouteStore = defineStore('routes',() => {
    const LeftRouteLinks = [
        {
            id:1,
            route : '/game',
            name : 'Game'
        },
        // {
        //     id:2,
        //     route : '/sample',
        //     name : 'Sample'
        // }
    ]
    const RightRouteLinks = [
        {
            id:1,
            route : '/Task-list',
            name :'Tasks'
        },
        {
            id:2,
            route : '/users',
            name :'User Details'
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
    const LearningRouteLink = [
        {
            id:1,
            route : '/shape',
            name:'Shape-gen'
        },
        {
            id:2,
            route : '/code',
            name:'Form-Code'
        },
    ]
    const UserRoute = [
        { id: 1, name: 'Profile', route: '/profile' },
        { id: 2, name: 'Logout', route: NaN }
      ];
    return { LeftRouteLinks, RightRouteLinks, ApiRouteLink, LearningRouteLink, UserRoute};
})