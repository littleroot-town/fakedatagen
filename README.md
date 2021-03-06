### 命令行使用说明

* 使用`npm install fakedatagen`安装到局部模块的使用方式

````bash
//在局部模块安装目录下运行
npx fakedatagen		//运行命令行程序
npx fakedatagen	-h	//获取帮助信息
npm update		//更新程序
````

* 使用`npm install fakedatagen -g`安装到全局模块的使用方式

```bash
//在任何目录下运行
fakedatagen		//运行命令程序
fakedatagen	-h	//获取帮助信息
npm update fakedatagen -g  //	更新程序
```

### 配置文件说明

示例文件

```json
{
  "number": 100,

  "fix": 5,

  "seed": 0,
  "flipprob": 0.01,

  "para": [
    {
      "name": "p1",
      "type": "float",
      "function": {
        "type": "多项式",
        "para": [0.5, 50, 3, -2, 2, -0.3],
        "range": [0, 2]
      }
    },
    {
      "name": "p2",
      "type": "float",
      "function": {
        "type": "sin",
        "para": [1, 0],
        "range": [0, 6.28]
      }
    },
    {
      "name": "n1",
      "type": "bool"
    },
    {
      "name": "n2",
      "type": "bool"
    }
  ]
}
```

* number：序列长度

* fix：设置float小数点位数

* seed：在其他配置不变的情况下修改seed可以生成不同序列（目前只针对bool数据有效）

* flipprob：bool序列发反转概率

* para：参数列表
  * name：参数名

  * type：参数类型
    * float
    * bool
    
  * function：float序列生成所应用的采样函数

    * type：函数类别

      * cos
      * sin
      * 折线
      * 多项式

    * para：函数参数

      * 多项式：`[k, a0, a1, a2 ,a3, a4]`

        > $k*(a1*Math.sin(x)+a2*Math.cos(x)+a3*x+a4*Math.pow(x,2)+a0)$ 

      * sin：`[k, a0]`

        > $k*Math.sin(x)+a0$

    * range：数据采样范围

### 模块使用示例程序

```javascript
const path = require('path')
const fakedatagen = require('./fakedatagen')

//第一个参数为配置文件完整路径，第二个参数为输出文件完整路径
fakedatagen(path.join(__dirname, 'conf.json'),path.join(__dirname,'result.txt'))
```

