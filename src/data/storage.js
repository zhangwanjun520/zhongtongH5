export default{
    // 判断低版本的浏览器兼容
    setItem(key,value,exptime = 3600*1000){
        if(window.localStorage){
            let obj = {}
            obj.data = value
            obj.ctime = (new Date()).getTime()
            obj.exptime = exptime
            localStorage.setItem(key, JSON.stringify(obj))
        }else{
            // 用cookie存值
            
        }
        
    },
    getItem(key){
        if(window.localStorage){
            let data = JSON.parse(localStorage.getItem(key))
            let nTime = (new Date()).getTime()
            if (nTime - data.ctime >= data.exptime) {
                localStorage.removeItem(key)
                return null
            } else {
                return data.data
            }
        }else{

        }
           
    },
}