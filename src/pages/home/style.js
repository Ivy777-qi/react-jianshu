import style from 'styled-components';

export const HomeWrapper = style.div`
    width:960px;
    height:300px;
    margin:0 auto;
    overfloat:hidden;
    padding-top:30px;
`

export const HomeLeft = style.div`
    float:left;
    width:625px;
    margin_left:15px;
    overfloat:hidden;
    .banner-img{
        width:625px;
        height:240px;
    }
 
`
export const HomeRight = style.div`
    width:240px;
    float:right;
    
`
export const TopicWrapper = style.div`
  padding:20px 0 10px 0;
   overfloat: hidden;
   height:100px;
   border-bottom:1px solid #dcdcdc;

`
export const TopicItem = style.div`
    height:32px;
    line-height:32px;
  float:left;
  font-size:12px;
  background:#f7f7f7;
  border:1px solid #dcdcdc;
  border-radius:4px;
  margin-right:10px;
  margin-bottom:10px;
  padding-right:5px;
  .topic-pic1{
      display:block;
      float:left;
      width:32px;
      height:32px;
      margin_bottom:18px;
  }

`
export const ListItem = style.div`
 border-bottom:1px solid #dcdcdc;
 
`

export const ListInfo = style.div`
.pic1{
    float:right;
    width:125px;
    height:100px;
    display:block;
    margin-top:20px;
}
.title{
    font-size:18px;
    line-height:27px;
}
.part{
    font-size:13px;
    line-height:24px;
    color:#333;
}
`
export const RecommendWrapper = style.div`
    width:280px;
    margin:30px 0 0;

`


//url(${(props)=>props.imgUrl});引用RecommendList传来的参数
export const RecommendList = style.div`
        display:block;
        width:100%;
        height:50px;
        background: url(${(props)=>props.imgUrl});
        background-size:contain;
        margin-bottom:5px;

`
export const WriterWrapper = style.div`
border: 1px solid #333;
width:280px;
height:400px;
`

export const WriterSwitch = style.div`
font-size:12px;
`
export const WriterTitle = style.div`
font-size:15px;
`
export const MoreList = style.div`
width:100%;
height:40px;
line-height:40px;
margin:30px 0;
background:#333;
color:#fff;
text-align:center;
font-size:15px;
border-radius:8px;
cursor:pointer;
`
export const BackTop = style.div`
position: fixed;
right:10px;
bottom:30px;
width:50px;
height:50px;
line-height:50px;
text-align:center;
border:1px solid #000;
transition:all .5s;


`
