const random = require('./random')
const fs = require('fs')

const conf = require('./conf.json')
const { connected } = require('process')

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

//浮点数范围
let min = conf.range.min ? conf.range.min : -1
let max = conf.range.max ? conf.range.max : 1

//生成序列
function seriesGen(type='float'){
  let series=[]
  if(type=='float'){
    for(let i=0;i<totalNum;++i){
      series.push(random.random(min, max).toFixed(fix))
    }
  }else{
    for(let i=0;i<totalNum;++i){
      series.push(Math.floor(random.random(0,2)))
    }
  }
  return series
}

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

//获取样本名称
for(let i in conf.para){
  names.push(conf.para[i].name) 
  nums.push(conf.para[i].type == 'float' ? seriesGen('float') : seriesGen('bool'))
}

str = names.join(' ') + '\n'
nums = transpose(nums)
for(let i in nums){
  str += nums[i].join(' ') + '\n'
}

fs.writeFile('./result.txt', str, 'utf-8', (err) => {
  if(err){
    console.log(err)
  }
})