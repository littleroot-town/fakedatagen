const random = require('./random')
const fs = require('fs')
const path = require('path')
const func = require('./func')

const { connected } = require('process')
const { get } = require('http')

//转置二维数组
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

function getText(confPath, savePath){
  const conf = require(confPath)

    //样本数量
  let totalNum = conf.number ? conf.number : 100
  //样本名称
  let names = []
  //样本结果
  let nums = []
  //设置随机数种子
  random.setSeed(conf.seed ? conf.seed : 0)
  //设置随机数小数点位数
  let fix = conf.fix ? conf.fix : 6

  //步幅度
  let step = conf.step ? conf.step : 0.01

  //采样函数
  let funcUse = func[conf.function] ? func[conf.function] : Math.sin
  
  //生成序列
function seriesGen(type='float', fun={}){
  let series=[]
  if(type=='bool'){
    let sign=0
    let flipprob= conf.flipprob ? conf.flipprob : 0.01
    for(let i=0;i<totalNum;++i){
      sign = random.random(0,1) < flipprob ? (sign == 0 ? 1 :0) : sign
      series.push(sign)
    }
  }else{
    let x=0
    funcUse = fun.type ? func[fun.type] : funcUse
    let para = fun.para
    for(let i=0;i<totalNum;++i){
      x += step
      series.push(funcUse(x, para))
    }
  }
  return series
}

  //获取样本名称
  for(let i in conf.para){
    names.push(conf.para[i].name) 
    nums.push(seriesGen(conf.para[i].type, conf.para[i].function))
  }

  str = names.join(' ') + '\n'
  nums = transpose(nums)
  for(let i in nums){
    str += nums[i].join(' ') + '\n'
  }

  fs.writeFile(savePath, str, 'utf-8', (err) => {
    if(err){
      console.log(err)
    }
  })
}

module.exports=getText