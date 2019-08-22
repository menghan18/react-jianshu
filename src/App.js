import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalStyle } from './style';
import { IconfontGlobalStyle } from './statics/iconfont/iconfont'
import store from './store'
import Header from './common/header/index'
import Home from './pages/home'
import Detail from './pages/detail'

class App extends Component {
  render () {
    return (
      <>
        <GlobalStyle />
        <IconfontGlobalStyle />
        <Provider store={store}>
          <BrowserRouter>
            <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
          </BrowserRouter>
        </Provider>
      </>
    );
  }
}

export default App;
