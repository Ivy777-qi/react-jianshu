import React, { PureComponent } from 'react';
import { ListItem, ListInfo, MoreList } from '../style';
import { connect } from 'react-redux';
import {actionCreators} from '../store';
import {Link} from 'react-router-dom';


class List extends PureComponent {
    render() {
        const { list,getMoreList,page } = this.props;
        //注意写法
        return (
            <div>
                {
                    list.map((item,index) => {
                        return (
                            // 对于单页面的跳转用link,不需要再次加载html文件
                            //用a需要再次加载
                            <Link key={index} to='/detail'>
                            <ListItem >
                                <ListInfo key={index}>
                                    <img alt='' className='pic1' src={item.get('imgUrl')} />
                                    <h2 className='title'>{item.get('title')}</h2>
                                    <p className='part'>{item.get('info')}</p>
                                </ListInfo>
                            </ListItem>
                            </Link>
                        );
                    })
                }
                <MoreList onClick={()=>getMoreList(page)}>更多文字</MoreList>
            </div>

        )



    }
}
const mapState = (state) => ({
    list: state.getIn(['home', 'passageList']),
    page:state.getIn(['home', 'articlePage'])
})
const mapDispatch = (dispatch) => ({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page))
    }
})

export default connect(mapState, mapDispatch)(List);  