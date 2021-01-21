import React, { PureComponent } from 'react';
import{WriterWrapper,WriterTitle,WriterSwitch} from'../style';
  
class Writer extends PureComponent{
    render(){
        return(
            <WriterWrapper>
                
                <WriterTitle>推荐作者</WriterTitle>
                <WriterSwitch>换一批</WriterSwitch>
            </WriterWrapper>
        )
    }
}
export default Writer;  