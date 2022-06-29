const random = require('./random')
const fs = require('fs')

//写入文件
// let str ='p1 p2 p3' + '\n' + '1.2321 2.323 1'
// fs.writeFile('./result.txt', str, 'utf-8', (err) => {
//   if(err){
//     console.log(err)
//   }
// })

//生成01随机数
// let one=0
// let zero=0
// //随机数
// for(let i=0;i<1000000;i++){
//   Math.floor(random.random(0,2))==0?(zero++):(one++)
// }
// console.log('zeor: '+zero+' one: '+one)

//二维数组转置
let arr = [[1,2,3],[3,4,5]]
function transpose(arr){
  let arr2=[]
  let m=arr.length
  let n=arr[0].length
  for(let j=0;j<n;++j){
    let tmp=[]
    for(let i=0;i<m;++i){
      tmp.push(arr[i][j])
    }
    arr2.push(tmp)
  }
  return arr2
}
let arr2 = transpose(arr)

for(let i in arr){
  console.log(arr[i])
}

for(let i in arr2){
  console.log(arr2[i])
}

//设置随机数种子
// random.setSeed(11)
// for(let i=0;i<10;++i){
//   console.log(random.random(-1, 1))
// }

//解析json文件
// fs.readFile('./conf.json', 'utf-8', (err, result) => {
//   if(err){
//     console.log('读取配置文件失败' + err)
//   }
//   console.log(JSON.parse(result))
// })