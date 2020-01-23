import React, { createContext } from 'react';
import logo from './logo.svg';
import style from './App.css';

import { Provider } from 'mobx-react'

import { Route,BrowserRouter as Router,Link,Switch } from 'react-router-dom'

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


const App: React.FC = () => {
  return (
    <myContext.Provider value={{a:1}}>
      <HookPage />
      <Provider {...stores}>
        <div {...{"className":'App mmm'}}>
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

          <Router>
            <Link to='/home'>dsfdsf</Link>
            {/* switch 用于路由守卫 每次url变化时,会执行 AuthExample 下的 逻辑*/}
            <Switch>
              <AuthExample />
            </Switch>
          </Router>


          {/* <Button>点击</Button> */}
          {/* <Compontent1></Compontent1>
          <Home></Home> */}
        </div>
      </Provider>
    </myContext.Provider>
  );
}

function AuthExample(props:any){
  console.log(props)
  return (  
    // <div>123</div>
    <Route pathname={props.location.pathname} component={Home}/>
  )
}

export default App;
