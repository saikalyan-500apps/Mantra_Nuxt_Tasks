// store/routepage
import { defineStore } from "pinia";

export const useRouteStore = defineStore('routes',() => {
    const LeftRouteLinks = [
        {
            id:1,
            route : '/game',
            name : 'Game'
        }
    ]
    const RightRouteLinks = [
        {
            id:1,
            route : '/Task-list',
            name :'Tasks'
        },
        {
            id:2,
            route : '/profile',
            name :'Profile'
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
            name:'Shape generator'
        },
        {
            id:2,
            route : '/code',
            name:'Form-Code generator'
        },
    ]
    return { LeftRouteLinks, RightRouteLinks, ApiRouteLink, LearningRouteLink };
})