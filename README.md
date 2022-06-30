### 配置文件说明

* seed：在其他配置不变的情况下修改seed可以生成不同序列（目前只针对bool数据有效）

* fix：设置float小数点位数

* range：float序列数据范围
  * min：对小于0的数据用min乘，当min为正数时可讲负数反转为正数
  * max：对大于0的数据用max乘
* function：float序列生成所应用的采样函数
  * cos
  * sin
  * 折线
  * 多项式
* flipprob：bool序列发反转概率

* number：序列长度

* para：参数列表
  * name：参数名
  * type：参数类型
    * float（默认值）
    * bool

示例文件

```json
{
  "seed": 0,
  "fix": 4,
  "range": {"min": -1, "max": 3},
  "number": 50000,
  "function": "折线",
  "flipprob": 0.001,
  "para": [
    {
      "name": "p1",
      "type": "float"
    },
    {
      "name": "p2",
      "type": "float"
    },
    {
      "name": "n1",
      "type": "bool"
    },
    {
      "name": "n2",
      "type": "bool"
    },
    {
      "name": "n3",
      "type": "bool"
    },
    {
      "name": "n4",
      "type": "bool"
    }
  ]
}
```

### 示例程序

```javascript
const path = require('path')
const fakedatagen = require('./fakedatagen')

//第一个参数为配置文件完整路径，第二个参数为输出文件完整路径
fakedatagen(path.join(__dirname, 'conf.json'),path.join(__dirname,'result.txt'))
```

