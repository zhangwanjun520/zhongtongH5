const path = require('path')

function resolve(dir){
  return path.join(__dirname,dir)
}
module.exports={
  devServer:{
    proxy:{
       '/hehe':{
         target:'http://smsclient.sinocall.com', // 请求的目标路径
         changeOrigin:true, //允许改变请求源
         pathRewrite:{
           "^/hehe":''  //路径重新
         }
       },
       "xixi":{
         target:'http://m.maoyan.com',
         changeOrigin:true, //允许改变请求源
         pathRewrite:{
           "^/xixi":''  //路径重新
         }
       },
       "lele":{
        target:'http://m.maoyan.com',
        changeOrigin:true, //允许改变请求源
        pathRewrite:{
          "^/lele":''  //路径重新
        }
      },
      "cc":{
        target:'http://m.maoyan.com',
        changeOrigin:true, //允许改变请求源
        pathRewrite:{
          "^/cc":''  //路径重新
        }
      },
      "jj":{
        target:'http://39.97.33.178',
        changeOrigin:true, //允许改变请求源
        pathRewrite:{
          "^/jj":''  //路径重新
        }
      },
      "ll":{
        target:'http://m.maoyan.com',
        changeOrigin:true, //允许改变请求源
        pathRewrite:{
          "^/ll":''  //路径重新
        }
      },
      "aa":{
        target:'http://m.maoyan.com',
        changeOrigin:true, //允许改变请求源
        pathRewrite:{
          "^/aa":''  //路径重新
        }
      },
    }
  },
  chainWebpack:(config)=>{
    // 起别名
    config.resolve.alias
    .set('style',resolve('./src/style'))
    .set('pages',resolve('./src/pages'))
    .set('components',resolve('./src/components'))
    // .set('utils',resolve('./src/utils'))
    // .set('api',resolve('./src/api'))
  }
}
