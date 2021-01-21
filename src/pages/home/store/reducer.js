import { fromJS } from 'immutable';
import * as constants from './constants';


const defaultState = fromJS({
   topicList: [],
   passageList: [],
   recommendList: [],
   articlePage: 1,
   showScroll: false
});
const changeHomeData=(state,action)=>{
   return state.merge({
      topicList: fromJS(action.topicList),
      passageList: fromJS(action.passageList),
      recommendList: fromJS(action.recommendList)
   }); 
}
const addArticleList=(state,action)=>{
   return state.merge({
       //concat(action.list)和之前的数组进行连接成新的数组
      //state.set('passageList', state.get('passageList').concat(action.list))
      passageList: state.get('passageList').concat(action.list),
      articlePage: action.nextPage
   }); 
}
export default (state = defaultState, action) => {
   switch (action.type) {
      case constants.CHANGE_HOME_DATA:
         return changeHomeData(state,action);
      case constants.ADD_ARTICLE_LIST:
         return addArticleList(state,action);         
      case constants.TOGGLE_TOP_SHOW:
         return state.set('showScroll', action.show);
      default:
         return state;
   }

   // console.log(focus);
   // if(action.type === constants.HANDLE_INPUT_FOCUS){
   //     //return {focus: true}
   //     //immutable方法
   //     //immutable对象的set方法,会结合之前immutable对象的值
   //     //和设置的值,返回一个全新的对象
   //     return state.set('focus',true)

   // }
   // if(action.type === constants.HANDLE_INPUT_BLUR){
   //    // return  {focus: false}
   //    //immutable方法
   //     return state.set('focus',false)
   // }
   // if(action.type === constants.INIT_INPUT_LIST){
   //     // return  {focus: false}
   //     //immutable方法
   //      return state.set('list',action.data)

   //  }

}