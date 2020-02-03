import React, { createContext } from 'react';
import logo from './logo.svg';
import style from './App.css';

import { Provider } from 'mobx-react'

import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'

import Compontent1 from './component1'
import Home from './pages/home/index'

import { Button } from 'antd'

import stores from './store'
import './rxjs-test'

import './axios-test'

import HookPage from './pages/hookPage'
// console.log(stores)
// console.log({...stores})

import myContext from './context'

import ContextPage from './pages/contextPage'


const App: React.FC = () => {
  return (
    <myContext.Provider value={{ a: 1 }}>

      <Provider {...stores}>
        <Router>
          <ul>
            <li><Link to='/home'>上传图片</Link></li>
            <li><Link to='/hook'>hook和markdown编辑器</Link></li>
            <li><Link to='/context'>context</Link></li>
          </ul>
          {/* switch 用于路由守卫 每次url变化时,会执行 AuthExample 下的 逻辑*/}
          <Switch>
            <AuthExample />
          </Switch>
        </Router>
        
      </Provider>


--------------------------------------------------------cssmoudle
      <div {...{ "className": 'App mmm' }}>
          <header className={style['App-header']}>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
          </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
          </a>

          </header>




          {/* <Button>点击</Button> */}
          {/* <Compontent1></Compontent1>
          <Home></Home> */}
        </div>
    </myContext.Provider>
  );
}

function AuthExample(props: any) {
  console.log(props)
  return (
    <div>
      <Route path='/home' component={Home} />
      <Route path='/hook' component={HookPage}/>
      <Route path='/context' component={ContextPage}/>
    </div>
    
  )
}

export default App;
