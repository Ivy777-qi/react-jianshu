import React, { PureComponent } from 'react';
import {TopicWrapper, TopicItem} from '../style';
import { connect} from 'react-redux';
  
class Topic extends PureComponent{
    render(){
        return(
            <TopicWrapper>
                {
                     this.props.list.map((item) =>(
                            <TopicItem>
                            <img alt = '' className='topic-pic1' src={item.get('imgUrl')}/>
                            {item.get('title')}
                            </TopicItem>
                         ))
                }
               
            </TopicWrapper>
        )
    }
}
const mapState = (state) => ({
    //返回一个就不需要return
       list: state.getIn(['home','topicList'])
        // focus: state.focus
        //immutable方法
        // focus: state.getIn(['header', 'focus']),
        // list: state.getIn(['header', 'list']),
        // moveIn: state.getIn(['header', 'moveIn']),
        // page: state.getIn(['header', 'page']),
        // totalPage: state.getIn(['header', 'totalPage']),


    })

export default connect(mapState, null)(Topic);