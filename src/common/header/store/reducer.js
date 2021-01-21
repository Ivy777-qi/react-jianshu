import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focus: false,
    list: [],
    moveIn: false,
    page: 1,
    totalPage: 1,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.HANDLE_INPUT_FOCUS:
            return state.set('focus', true);
        case constants.HANDLE_INPUT_BLUR:
            return state.set('focus', false);
        case constants.INIT_INPUT_LIST:
            return state.merge({
                list:action.data,
                totalPage:action.totalPage
            })
            //return state.set('list', action.data).set('totalPage',action.totalPage);
        case constants.HANDLE_MOUSE_ENTER:
            return state.set('moveIn', true);
        case constants.HANDLE_MOUSE_LEAVE:
            return state.set('moveIn', false);
        case constants.HANDLE_CHANGE_PAGE:
            return state.set('page', action.page);
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