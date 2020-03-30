#!/usr/bin/env node

// var argv = process.argv;  // argv是命令行的参数
// var filePath = __dirname; // filePath是当前文件的路径，也就是以后安装后文件的路径，用于存放模板文件非常好
// var currentPath = process.cwd(); // currentPath是当前shell上下文路径，也就是生成器要生成文件的目标位置

// console.log(argv)
// console.log(filePath)
// console.log(currentPath)

var argv = process.argv;

console.log(argv)

const fs = require('fs')
const nunjucks = require('nunjucks') // 引入nunjucks模块


//fs.readFileSync(’./gen.tpl’).toString()，使用了一个读取文件的同步方法，并把文件内容转成字符串，原来是buffer
var tpl = fs.readFileSync('./index.tpl').toString()

/**
 * nunjucks.renderString方法是编译模板用的，它有2个参数
 * @param 第一个是模板字符串
 * @param 第二个是json数据
 */

var compiledData = nunjucks.renderString(tpl, { username: 'James' });

console.log(compiledData) // compiledData就是编译后的结果