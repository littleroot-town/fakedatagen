#! /usr/bin/env node

const { program } = require('commander');
const path = require('path')
const fs = require('fs')
const readline = require('readline');

const fakedatagen = require('../index.js')


program
  .option('-i <filename>')
  .option('-o <filename>')
  .option('-h')

program.parse();

const options = program.opts();

const helpMessage = `
NAME
  fakedatagen - 假数据生成
SYNOPSIS
  fakedatagen [-h] [-i <config-file-name>] [-o <result-file-name>] 
DESCRIPTION
  根据输入配置文件, 生成txt格式数据
OPTIONS
  -h  帮助信息
  -i  输入文件名, 缺省时默认为config.json
  -o  输出文件名, 缺省时默认为result.txt
`

if(options.h){
  console.log(helpMessage)
  return
}

const inputFile = options.i ? path.join(process.env.PWD,options.i) : path.join(process.env.PWD,'conf.json')
const outputFile = options.o ? path.join(process.env.PWD,options.o) : path.join(process.env.PWD,'result.txt')

try{
  fakedatagen(inputFile, outputFile)
}catch(e){
  console.log('数据生成失败，请检查配置文件是否存在')
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  //question异步处理
  rl.question('是否生成默认配置文件，并生成数据(y/n)? ', (answer) => {
    if(answer.trim().toLowerCase() != 'y' && answer.trim().toLowerCase != 'yes' && answer.trim()!=''){
      rl.close()
      return
    }

    // npm发布后该文件会以符号连接形式存于/modules/.bin文件中，指向/modules/fakedatagen/bin中原文件
    fs.writeFileSync(inputFile, fs.readFileSync(path.join('../fakedatagen', 'conf.json')));
    fakedatagen(inputFile, outputFile)
    console.log('数据生成成功')
    //因为question异步，故该条close放在answer块内，否则出现命令行不关闭问题
    rl.close()
  });
}