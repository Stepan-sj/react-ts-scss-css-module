import axios from 'axios'



// 添加响应拦截器
axios.interceptors.response.use( (response)=> {
    // 对响应数据做点什么
    console.log(response)
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

axios({
    method: 'get',
    url: 'http://inner.meeno.net:10420/zhubao-service/insurance/option/enterprise/get.action',
    data: {
      
    }
}).then(data=>{
    console.log(data)
});