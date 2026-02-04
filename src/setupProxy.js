const {createProxyMiddleware} = require('http-proxy-middleware')
// 配制代理
module.exports = function(app){
    app.use(
        // createProxyMiddleware('/api1',{ // 遇到 /api1 前缀的请求 ，就会触发该代理配置
        //     target:'http://localhost:3000', // 请求转发给 指定地址
        //     changeOrigin:true, // 控制服务器收到的响应头中Host字段的值
        //     pathRewrite:{ // 将^ /api1 替换成 ''
        //         "^/api1":''
        //     },
        //     "secure": false  //如果访问的是https类的链接，就需要设置为true
        // }),
        createProxyMiddleware('/githubApi',{
            target:'https://api.github.com',
            changeOrigin:true,
            pathRewrite:{
                "^/githubApi":''
            },
            "secure": true
        })        
    )
}