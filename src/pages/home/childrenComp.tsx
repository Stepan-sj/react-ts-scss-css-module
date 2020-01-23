import React, { useImperativeHandle } from 'react'

interface IProps {
    [key: string]: any
}

export default class ChildrenComp extends React.Component<IProps>{
    state = {
        count:0
    }
    handleClick = ()=>{
        this.setState({
            count:this.state.count+1
        })
        this.props.changeValue()
    }
    render(){
        console.log(2)
        return (
            <div>
                {this.state.count}
                <button onClick={ this.handleClick }>123</button>
            </div>
        )
    }
}