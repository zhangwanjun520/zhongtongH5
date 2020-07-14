import  axios from  'utils/axios.js'
export const submit=(data)=>{
 axios.post('http://47.95.207.1:8080/v1/user/reg',data)
 .then(res=>{
     console.log(res)
 })
}
  
// export const  addlist = (matter)=>{
//     return new Promise((resolve,reject)=>{
      
//       let url='http://47.95.207.1:8080/v1/matter/add'
//       let token= localStorage.getItem('token')||''
//       let  uid=localStorage.getItem('uid')||''
//       axios.post(url,fomatData({token,uid,matter})).then((res)=>{resolve(res)})
//       .catch((err)=>{reject(err)})
//     })
//   }

//   export const  getlist = ()=>{
//   return new Promise((resolve,reject)=>{
//     let url='http://47.95.207.1:8080/v1/matter/get'
//     let token= localStorage.getItem('token')||''
//     let uid=localStorage.getItem('uid')||''
//     axios.post(url,fomatData({token,uid})).then((res)=>{resolve(res)})
//     .catch((err)=>{reject(err)})
//   })
// }

