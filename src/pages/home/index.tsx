import React from 'react'

import { inject, observer } from 'mobx-react'

import { Button, Upload,Icon,Input } from 'antd'

import io from 'socket.io-client'

import myContext from "../../context";
import ChildrenComp from './childrenComp'

interface IProps {
    [key: string]: any
}




@inject('rootStore')
@observer
export default class Home extends React.Component<IProps>{
    state={
        fileList:[],
        value:''
    }

    inputChange = (e:any)=>{
        // console.log(this.context)
        // console.log(myContext)
        this.setState({
            value:e.target.value
        })
    }

    static contextType = myContext

    static a =1

    handleChange = (obj:any) =>{
        console.log(obj)
        let formData = new FormData()
        formData.append('file', obj.file);
        fetch('http://localhost:9999/upload',{
            method:"POST",
            headers:{
    		//   'Content-Type':'multipart/form-data'
            },
            body:formData
        }).then((response)=>{
            // console.log(response);
            //设置进度条
            obj.onProgress({percent:100})
            //设置上传成功
            obj.onSuccess(()=>{
                this.setState({
                    loading:false
                })
            })
        })
    }

    socket = io('http://localhost:9999')
    sendSocket() {
        // console.log(this.socket)
        this.socket.emit('ferret', 'tobi', (data: any) => {
            console.log(data); // data will be 'woot'
        });
    }
    componentWillMount() {
        this.socket.on('connect', () => {
            console.log('已连接')
            console.log(this.socket.id)
            // this.socket.on('message',()=>{

            // })
            // this.socket.emit('hello','dsfdsf')
        });
    }
    changeValue = ()=>{
        console.log(this)
        this.setState({
            value:this.state.value+'sdf'
        })
    }
    render() {
        console.log(1)
        // console.log(this.props)
        return (
            <div>
                <Input onChange={this.inputChange}></Input>
                <ChildrenComp changeValue={this.changeValue}/>
                {this.state.value}
                <Button onClick={this.props.rootStore.homeStore.addCount}>点击</Button>
                {this.props.rootStore.homeStore.count}
                {this.props.rootStore.homeStore.computedState}
                <Button onClick={() => { this.sendSocket() }}>发送消息</Button>
                <Upload
                    name='file'
                    // onChange={this.handleChange}
                    customRequest={this.handleChange}
                    // fileList={this.state.fileList}
                >
                    <Button>
                        <Icon type="upload" /> Click to Upload
                    </Button>
                </Upload>


                <Upload
                    name='files'
                    action='http://localhost:9999/uploadMul'
                    multiple={true}
                    // onCha
                    // customRequest={this.handleChange}
                    // fileList={this.state.fileList}
                >
                    <Button>
                        <Icon type="upload" /> Click to Upload
                    </Button>
                </Upload>
            </div>
        )
    }
}