import React,{createContext, useState} from 'react';
// import './App.css';d

const context = createContext({});
const onlineContext = createContext(true) //createContext 默认值参数 当没有提供provider时，consumer消费者得到的是该默认值

const Middle = ()=>{
  return (
    <Leaf />
  )
}


//consumer 里必须跟函数 参数为context的value
class Leaf extends React.Component{
  render(){
    return (
      <context.Consumer>
        {
        value => {
          return (
            <onlineContext.Consumer>
              {
                valueB => {
                  return (
                    <div>
                      {value}
                      {valueB + ''}
                    </div>
                  )
                }
              }
            </onlineContext.Consumer>
          )
        }
        }
      </context.Consumer>
      
    )
  }
}

const ContextPage = () => {

  let [count,setCount] = useState(0)
  let [online,setOnline] = useState(false)

  function handleClick (){
    setCount(val => val+1)
  }
  
  return (
    <context.Provider value={count}>
      <onlineContext.Provider value={online}>
        <button onClick={ handleClick }>点击</button>
        <Middle />
      </onlineContext.Provider>
    </context.Provider>
  );
}

export default ContextPage;
