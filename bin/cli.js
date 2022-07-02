#! /usr/bin/env node

const { program } = require('commander');
const path = require('path')
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
  -i  输出文件名, 缺省时默认为result.txt
`

if(options.h){
  console.log(helpMessage)
  return
}

const inputFile = options.i ? path.join(process.env.PWD,options.i) : path.join(process.env.PWD,'conf.json')
const outputFile = options.o ? path.join(process.env.PWD,options.o) : path.join(process.env.PWD,'result.txt')

fakedatagen(inputFile, outputFile)