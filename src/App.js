import React, { Component } from 'react';
import { GlobalStyle } from './style';
import { IconfontGlobalStyle } from './statics/iconfont/iconfont'
import Header from './common/header/index'

class App extends Component {
  render () {
    return (
      <>
        <GlobalStyle />
        <IconfontGlobalStyle/>
        <Header/>
      </>
    );
  }
}

export default App;
