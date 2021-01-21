import React, { PureComponent } from 'react';
import{RecommendWrapper,RecommendList} from'../style';
import { connect } from 'react-redux';

class Recommend extends PureComponent{
    render(){
        const {list} = this.props;
        return list.map((item)=>(
            <RecommendWrapper>
                <RecommendList imgUrl={item.get('imgUrl')}/>
            </RecommendWrapper>
        ))
    }
}
const mapState = (state) =>({
    list:state.getIn(['home','recommendList'])
})
export default connect(mapState,null)(Recommend);  