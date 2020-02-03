import React, { useEffect, useState,useRef } from 'react'
import { Button } from 'antd'
import Editor from 'for-editor'
const ReactMarkdown = require('react-markdown/with-html')


function HookPage() {
    const [count, setCount] = useCount()
    const [value, setValue] = useState('');
    const ref = useRef<any>()
    function handleClick() {
        setCount(c => c + 1)
    }

    function handleChange(value: string) {
        console.log(value)
        setValue(value)
    }
    function addImg($file:File) {
        ref.current.$img2Url($file.name, 'http://i1.sinaimg.cn/ent/d/2008-06-04/U105P28T3D2048907F326DT20080604225106.jpg')
        console.log($file)
      }

    return (
        <>
            <div>hookPage {count}</div>
            <Button onClick={handleClick}>nihao</Button>
            <Editor
                ref={ref}
                value={value}
                onChange={handleChange}
                addImg={($file) => addImg($file)}
            />
            <ReactMarkdown 
                source={value}
            />
        </>
    )
}

function useCount() {
    const [count, setCount] = useState<number>(0)
    //第二个参数count ,有count 才会执行useEffect 当对应依赖修改时修改
    useEffect(() => {
        console.log('更新')
    }, [count])
    return [count, setCount] as const
}

const y = '2'
let x = '1' as const

export default HookPage;