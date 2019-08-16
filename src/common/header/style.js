import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height:58px;
  border-bottom:1px solid #f0f0f0;
`

export const Logo = styled.a`
  position: absolute;
  display: block;
  top: 0;
  width: 0;
  width: 100px;
  height: 58px;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  box-sizing: border-box;
  padding-right: 70px;
  width: 960px;
  height: 100%;
  margin: 0 auto;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color:#333;
  &.left {
    float: left;
  }
  &.right{
    float: right;
    color: #969696;
  }
  &.active{
    color: #ea6f5a;
  }
`

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 50%;
    text-align:center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 30px 0 20px;
  width: 160px;
  height: 38px;
  box-sizing: border-box;
  border: none;
  outline: none;
  font-size: 14px;
  border-radius: 19px;
  background: #eee;
  &::placeholder{
    color:#666;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active{
    width: 160px;
  }
`

export const Addition = styled.div`
  position: absolute;
  right:0;
  top: 0;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  &.reg{
    color: #ec6149;
  }
  &.writting{
    color: #fff;
    background: #ec6149;
  }
`