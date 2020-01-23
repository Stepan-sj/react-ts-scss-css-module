# css module
react 脚手架 其实自带css模块化了,只不过要遵循他的文件命名范:需要模块化的css文件名 命名需要加.module.less/css/scss.
这样不会和antd的按需加载冲突.

# 用之前需要先定义声明文件

# mobx 想要响应式 inject必须要在上面 observer在下面
# 如果想要更好管理store 可以建多个class
例如：aStore.js bStore.js
import aStore from 'aStore.js'
import bStore from 'bStore.js'
export defalut {
    aStore,
    bStore
}

# switch 用于路由守卫 每次url变化时,会执行 AuthExample 下的 逻辑


# React 基础
父组件更新状态 不管子组件有没有依赖父组件的状态 子组件都会重新渲染
子组件更新状态 父组件不依赖子组件状态 父组件不会重新渲染
