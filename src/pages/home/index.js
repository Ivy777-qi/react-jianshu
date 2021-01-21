import React, { PureComponent } from 'react';
import {HomeWrapper, HomeLeft, HomeRight,BackTop} from './style';
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import {connect} from 'react-redux';
import {actionCreators} from './store';


class Home extends PureComponent{
    goTop(){
        //回到顶部
        window.scrollTo(0,0);
    }
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img alt = '' className='banner-img' src= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYfxc_je3iYayzkGyj7J_sKnbk_yUtZLnpaQ&usqp=CAU" />
                <Topic/>
                <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {this.props.showScroll? <BackTop onClick={this.goTop}>顶部</BackTop> : null}
                
            </HomeWrapper>
        )
    }
    componentDidMount(){
      this.props.changeHomeData();
      this.bindEvents();
    }
    componentWillUnmount(){
        //解绑事件
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }
    //绑定事件
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}
const mapState = (state) =>({
    showScroll: state.getIn(['home','showScroll'])
})
const mapDispatch =(dispatch)=>({
    changeHomeData(){
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow(e){
        if(document.documentElement.scrollTop > 100){
            dispatch(actionCreators.toggleTopShow(true));
        }else{
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
})
export default connect(mapState,mapDispatch)(Home);  