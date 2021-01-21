import * as constants from './constants';
import axios from 'axios';
import {fromJS} from 'immutable';
//自用的
const initList = (data) =>({
    type:constants.INIT_INPUT_LIST,
    //为了后来在reducer传递给immutable的list,所以想data进行immutable
    data:fromJS(data),
     // Math.ceil取整
     totalPage: Math.ceil(data.length/10)
});
//下面是导出的
export const inputFocus= () =>({
    type:constants.HANDLE_INPUT_FOCUS
});

export const inputBlur = () =>({
    type:constants.HANDLE_INPUT_BLUR
});
export const mouseEnter = () =>({
    type:constants.HANDLE_MOUSE_ENTER
});
export const mouseLeave = () =>({
    type:constants.HANDLE_MOUSE_LEAVE
});
export const changePage = (page) =>({
    type:constants.HANDLE_CHANGE_PAGE,
   page
});



export const getInitList = () =>{
    return (dispatch) => {
        axios.get('./api/initList.json').then((res)=>{
            const data = res.data;
            const action = initList(data.data);
            dispatch(action)
        }).catch(()=>{
            console.log('error');
        })
    }
}
