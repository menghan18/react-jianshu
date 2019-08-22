import React, { PureComponent } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Home extends PureComponent {
  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4706/7fc6a088c85ad29ab9754a8f5a7569c83a9db0a4.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""></img>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}

      </HomeWrapper>
    )
  }

  componentDidMount () {
    this.props.changeHomeData()
    this.bindEvents()
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  handleScrollTop () {
    window.scrollTo(0, 0)
  }

  bindEvents () {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData () {
    const action = actionCreators.getHomeInfo()
    dispatch(action)
  },
  changeScrollTopShow () {
    const action = actionCreators.toggleTopShow
    if (document.documentElement.scrollTop > 100) {
      dispatch(action(true))
    } else {
      dispatch(action(false))
    }
  }
})

export default connect(mapState, mapDispatch)(Home)
