
import style from 'styled-components';
import logoPic from '../../statics/logo.png';


export const HeaderWrapper = style.div`
    position: relative;
    height:56px;
    border-bottom:1px solid #f0f0f0;
    margin:-8px 40px;
    padding:0;
`;
//${logpic}放入图片的地址
//a.attrs({href:'/'表示根路径就是刷新到主页;
export const Logo = style.div`
    position: absolute;
    top:0;
    left:0;
    height:56px;
    width:100px;
    display:block;
    background: url(${logoPic});
    background-size:contain;
`;

export const Nav = style.div`
    width:60%;
    height:100%;
    margin: 0 auto;
`;
export const NavItem = style.a`
    font-size:17px;
    line-height:56px;
    box-sizing:border-box;
    &.left{
        float: left;
        padding:0 15px;
    }
    &.right{
        float:right;
        color:#969696;
        padding:0 12px;
    }
    &.shouye{
        color:#ea6f5a;
    }

`;

export const SearchWrapper= style.div`
    float:left;
    position: relative;
    .zoom{
        position: absolute;
        line-height:30px;
        bottom:5px;
        right:5px;
        width:30px;
        height:30px;
        border-radius:50%;
        text-align:center;
        &.focus{
            background:#777;
            color:#fff;
        }
    }
    
`;

export const NavSearch = style.input.attrs({
    placeholder:'搜索'
})`
    font-size:14px;
    line-height:56px;
    width:160px;
    height:38px;
    margin-top:9px;
    padding-left:20px;
    padding-right:30px;
    margin-left:15px;
    border:0;
    outline:0;
    border-radius:40px;
    background-color: rgb(238, 238, 238);
    color:#333;
    box-sizing: border-box;
    &::placeholder{
        color: #eee;
    }
    &.focus{
        width:240px;
        padding-right:30px;
    }
    .slide-enter,.slide-exit{
        transition:all 1s ease-in;
    }
    .slide-enter-active{
        width:240px;
    }
    .slide-exit-active{
        width:160px;
    }

`;
export const SearchInfo= style.div`   
        position: absolute;
        top:50px;
        left:10px;
        width:250px;
        background:#fff;
        border: 1px solid rgb(238, 238, 238);
        color:#777;
        font-size:13px;
       

    
`;
export const SearchTitle= style.div`   
        float:left;
        margin: 15px 0 0 15px;
        font-size:14px;
        
    
`;
//只有block才能旋转+float
//tranform-origin默认以中心轴位置旋转
export const SearchSwitch= style.div`   
        float:right;
        margin:15px 15px 0 0;
        cursor:pointer;
        .iconfont{
            display:block;
            float:left;
            margin-right:2px;
            transition:all .2s ease-in;
            tranform-origin:center center;
        }
    
`;
//overfloat:hidden解决子元素自动撑开父元素
export const SearchItemwrapp= style.div`  
    margin:40px 0 0 15px;
    overfloat:hidden;
`;
export const SearchItem= style.a`   
    display:block;
    float:left;
    border: 1px solid rgb(238, 238, 238);
    padding:2px 8px;
    border-radius: 5px;
    margin:8px 10px 5px 0;
`;

export const Addition = style.div`
position: absolute;
top:0;
right:0;
font-size:15px;
line-height:56px;
`;
export const Button = style.a`

border:1px solid rgba(236,97,73,.7);
box-sizing:border-box;
border-radius: 20px;
padding:6px 12px;
&.xiewenzhang{
    width:100px;
    height:40px;
    background:rgba(236,97,73,.7);
    margin:0 12px;
    color:#fff;
}
&.zhuce{
    width:80px;
    height:38px;
    color:rgba(236,97,73,.7);
    margin:0 5px 15px;
}
`;

