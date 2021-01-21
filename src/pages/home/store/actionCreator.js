import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';


const changeHomeData =(result)=>({
    type:constants.CHANGE_HOME_DATA,
    topicList:result.topicList,
    passageList:result.passageList,
    recommendList:result.recommendList
})
const addMoreList =(list,nextPage)=>({
    type:constants.ADD_ARTICLE_LIST,
    list:fromJS(list),
    nextPage
})

export const getHomeInfo = () =>{
    return (dispatch) =>{
        axios.get('/api/home.json').then((res)=>{
            const result = res.data.data;
            const action = changeHomeData(result);
            dispatch(action);
        })
        
    }
}
export const getMoreList = (page) =>{
    return (dispatch) =>{
        axios.get('/api/homeList.json?page='+ page).then((res)=>{
            const result = res.data.data;
            dispatch(addMoreList(result,page + 1));
        })
        
    }
}
export const toggleTopShow = (show) =>({
     type:constants.TOGGLE_TOP_SHOW,
     show
})


