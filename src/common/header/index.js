import React, { Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import { Link } from 'react-router-dom';

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchTitle,
    SearchSwitch,
    SearchItem,
    SearchItemwrapp,
    Addition,
    Button
} from './style';

import { IconfontStyle } from '../../statics/iconfont/iconfont'





// //无状态函数
// const Header = (props) => {

// }

class Header extends React.PureComponent {
    getSearchList() {
        const { focus, list, moveIn, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        //immutable
        const newList = list.toJS();

        const pageList = [];
        if (newList.length) {
            //设置10个为一页
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(<SearchItem key={newList[i]}>{newList[i]}</SearchItem>)
            }
        }
        if (focus || moveIn) {
            return (
                <SearchInfo onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <SearchTitle>热门搜索</SearchTitle>
                    <SearchSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                        {/* ref获取到的是dom元素 */}
                        <i ref={(icon) => { this.spinIcon = icon }} className='iconfont'>&#xe8e7;</i>
                    换一换</SearchSwitch>
                    <SearchItemwrapp>
                        {/* {
                            list.map((item) => {
                                return <SearchItem key={item}>{item}</SearchItem>
                            })
                        } */
                            pageList
                        }
                    </SearchItemwrapp>
                </SearchInfo>
            )
        } else {
            return null;
        }

    }
    // constructor(props){
    //     super(props);
    //     this.state ={
    //         focus:false
    //     }
    //     this.handleInputBlur = this.handleInputBlur.bind(this);
    //     this.handleInputFocus = this.handleInputFocus.bind(this);
    // }
    render() {
        const { focus, list, handleInputFocus, handleInputBlur } = this.props;
        return (
            <Fragment>
                <IconfontStyle />
                <HeaderWrapper>


                    <Link to='/'>
                        <Logo />
                    </Link>

                    <Nav>
                        <NavItem className='left shouye'>首页</NavItem>
                        <NavItem className='left xiazai'>下载App</NavItem>
                        <NavItem className='right login'>登录</NavItem>
                        <NavItem className='right daxiaoxie'>
                            <i className='iconfont'>&#xe636;</i>
                        </NavItem>
                        {/* 组件名字大写 */}
                        <SearchWrapper>
                            <CSSTransition
                                in={focus}
                                timeout={1000}
                                classNames="slide"
                            >
                                <NavSearch className={focus ? 'focus' : ''}
                                    onFocus={() => handleInputFocus(list)}
                                    onBlur={handleInputBlur} >
                                </NavSearch>
                            </CSSTransition>
                            <i className={focus ? 'focus iconfont zoom' : 'iconfont zoom'}>&#xe69d;</i>
                            {
                                this.getSearchList()
                            }
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Button className='zhuce'>注册</Button>
                        <Button className='xiewenzhang'>
                            <i className='iconfont'>&#xe616;</i>
                        写文章</Button>
                    </Addition>

                </HeaderWrapper>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    //state的属性传给props
    console.log(state);
    return {
        // focus: state.focus
        //immutable方法
        focus: state.getIn(['header', 'focus']),
        list: state.getIn(['header', 'list']),
        moveIn: state.getIn(['header', 'moveIn']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),


    }
}

const mapDispatchToProps = (dispatch) => {
    //发布action
    return {
        handleInputBlur() {
            dispatch(actionCreators.inputBlur());
        },

        handleInputFocus(list) {
            //list.size==0是为了不让一直进行请求数据
            (list.size === 0) && dispatch(actionCreators.getInitList());
            dispatch(actionCreators.inputFocus());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, pin) {
            //pin.style.transform ='rotate(360deg)';
            //原生js来获得pin.style.transform
            //replace (/[^0-9]/ig, '')截取rotate(360deg)中数字部分
            let originAngle = pin.style.transform.replace(/[^0-9]/ig, '');
            console.log(originAngle);
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
                console.log(originAngle);
            } else {
                originAngle = 0;
            }
            pin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            console.log(pin.style.transform);
            //以上实现spin的旋转功能

            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }

        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);