import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { GlobalStyle } from './style';
import { IconfontGlobalStyle } from './statics/iconfont/iconfont'
import store from './store'
import Header from './common/header/index'

class App extends Component {
  render () {
    return (
      <>
        <GlobalStyle />
        <IconfontGlobalStyle />
        <Provider store={store}>
          <Header />
        </Provider>
      </>
    );
  }
}

export default App;
