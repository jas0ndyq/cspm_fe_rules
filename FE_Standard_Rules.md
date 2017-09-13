
# 前端编码规范

统一团队的编码规范，有助于代码的维护。本规范是传统意义上的 `风格之南`，目的是统一一些相对主观化的代码风格。

# HTML规范
## DOCTYPE 声明

HTML文件必须加上 DOCTYPE 声明，并统一使用 HTML5 的文档声明：

```html
	<!DOCTYPE html>
```

### 更多关于 DOCTYPE声明
[#The DOCTYPE](http://www.w3.org/TR/2014/REC-html5-20141028/syntax.html#the-doctype)


## 页面语言LANG

### 团队约定

推荐使用属性值 `zh-CN`
```html
	<html lang="zh-CN">
```

## CHARSET

一般情况下统一使用 “UTF-8” 编码
```html
	<meta charset="UTF-8">
```

#### 更多关于

Charset ：[character-encoding-declaration](http://www.w3.org/TR/html5/document-metadata.html#character-encoding-declaration)


## 元素及标签闭合

HTML元素共有以下5种：

* 空元素：area、base、br、col、command、embed、hr、img、input、keygen、link、meta、param、source、track、wbr
* 原始文本元素：script、style
* RCDATA元素：textarea、title
* 外来元素：来自MathML命名空间和SVG命名空间的元素。
* 常规元素：其他HTML允许的元素都称为常规元素。



为了能让浏览器更好的解析代码以及能让代码具有更好的可读性，有如下约定：

* 所有具有开始标签和结束标签的元素都要写上起止标签，某些允许省略开始标签或和束标签的元素亦都要写上。
* 空元素标签都不加 “/” 字符


*推荐：*

```html
<div>
    <h1>我是h1标题</h1>
    <p>我是一段文字，我有始有终，浏览器能正确解析</p>
</div>

<br>
```

*不推荐：*

```html
<div>
    <h1>我是h1标题</h1>
    <p>我是一段文字，我有始无终，浏览器亦能正确解析
</div>

<br/>
```

更多关于元素及标签关闭：[#Elements](http://www.w3.org/TR/html5/syntax.html#elements-0)

## 书写风格

### HTML代码大小写

HTML标签名、类名、标签属性和大部分属性值统一用小写

*推荐：*

```html
<div class="demo"></div>
```

*不推荐：*

```html
<div class="DEMO"></div>

<DIV CLASS="DEMO"></DIV>
```

HTML文本、CDATA、JavaScript、meta标签某些属性等内容可大小写混合

```html
<!-- 优先使用 IE 最新版本和 Chrome Frame -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>

<!-- HTML文本内容 -->
<h1>I AM WHAT I AM </h1>

<!-- JavaScript 内容 -->
<script type="text/javascript">
	var demoName = 'demoName';
	...
</script>

<!-- CDATA 内容 -->
<script type="text/javascript"><![CDATA[
...
]]></script>
```

### 类型属性

不需要为 CSS、JS 指定类型属性，HTML5 中默认已包含

*推荐：*

```html
<link rel="stylesheet" href="" >
<script src=""></script>
```

*不推荐：*

```html
<link rel="stylesheet" type="text/css" href="" >
<script type="text/javascript" src="" ></script>
```

### 元素属性

* 元素属性值使用双引号语法
* 元素属性值可以写上的都写上


*推荐：*

```html
<input type="text">

<input type="radio" name="name" checked="checked" >
```

*不推荐：*

```html
<input type=text>
<input type='text'>

<input type="radio" name="name" checked >
```


更多关于元素属性：[#Attributes](http://www.w3.org/TR/html5/syntax.html#attributes-0)

### 特殊字符引用

文本可以和字符引用混合出现。这种方法可以用来转义在文本中不能合法出现的字符。


在 HTML 中不能使用小于号 “&lt;” 和大于号 “&gt;”特殊字符，浏览器会将它们作为标签解析，若要正确显示，在 HTML 源代码中使用字符实体

*推荐：*

```html
<a href="#">more&gt;&gt;</a>
```

*不推荐：*

```html
<a href="#">more>></a>
```
更多关于符号引用：[#Character references](http://www.w3.org/TR/html5/syntax.html#character-references)

### 代码缩进

统一使用四个空格进行代码缩进，使得各编辑器表现一致（各编辑器有相关配置）

```html
<div class="cspm">
    <a href="#"></a>
</div>
```

### 纯数字输入框

使用 `type="tel"` 而不是 `type="number"`

```html
<input type="tel">    
```
### 代码嵌套

元素嵌套规范，每个块状元素独立一行，内联元素可选

*推荐：*

```html
<div>
    <h1></h1>
    <p></p>
</div>
<p><span></span><span></span></p>
```

*不推荐：*

```html
<div>
    <h1></h1><p></p>
</div>
<p>
    <span></span>
    <span></span>
</p>
```
段落元素与标题元素只能嵌套内联元素

*推荐：*

```html
<h1><span></span></h1>
<p><span></span><span></span></p>
```

*不推荐：*

```html
<h1><div></div></h1>
<p><div></div><div></div></p>
```

# CSS规范

## 编码规范

### 文档内嵌样式表编码

当样式出现在其它文档，如 HTML 的 STYLE 标签或标签属性 "style"，样式的编码由文档的决定。


## 代码风格

### 代码格式化

样式书写一般有两种：一种是紧凑格式 (Compact)

```css
.cspm{ display: block;width: 50px;}
```

一种是展开格式（Expanded）

```css
.cspm{
    display: block;
    width: 50px;
}
```

**团队约定**

统一使用展开格式书写样式


### 代码大小写

样式选择器，属性名，属性值关键字全部使用小写字母书写，属性字符串允许使用大小写。

```css
/* 推荐 */
.cspm{
	display:block;
}

/* 不推荐 */
.CSPM{
	DISPLAY:BLOCK;
}
```

### 选择器

* 尽量少用通用选择器 `*`
* 不使用无具体语义定义的标签选择器
* 存在多个有语义的标签时不使用标签选择器


```css
/* 推荐 */
.cspm {}
.cspm li {}
.cspm li p {}
.cspm .dev {}

/* 不推荐 */
*{}
#cspm {}
.cspm div{}

```


### 代码缩进

统一使用四个空格进行代码缩进，使得各编辑器表现一致（各编辑器有相关配置）

```css
.cspm {
    width: 100%;
    height: 100%;
}
```

### 分号

每个属性声明末尾都要加分号；

```css
.cspm {
    width: 100%;
    height: 100%;
}
```

### 代码易读性

左括号与类名之间一个空格，冒号与属性值之间一个空格

*推荐：*

```css
.cspm {
    width: 100%;
}
```

*不推荐：*

```css
.cspm{
    width:100%;
}
```


逗号分隔的取值，逗号之后一个空格

*推荐：*

```css
.cspm {
    box-shadow: 1px 1px 1px #333, 2px 2px 2px #ccc;
}
```

*不推荐：*

```css
.cspm {  
    box-shadow: 1px 1px 1px #333,2px 2px 2px #ccc;
}
```

为单个css选择器或新申明开启新行

*推荐：*

```css
.cspm,
.cspm_logo,
.cspm_hd {
    color: #ff0;
}
.nav{
    color: #fff;
}
```

*不推荐：*

``` css
.cspm,cspm_logo,.cspm_hd {
    color: #ff0;
}.nav{
    color: #fff;
}
```

颜色值 `rgb()` `rgba()` `hsl()` `hsla()` `rect()` 中不需有空格，且取值不要带有不必要的 0

*推荐：*

```css
.cspm {
    color: rgba(255,255,255,.5);
}
```

*不推荐：*

```css
.cspm {
    color: rgba( 255, 255, 255, 0.5 );
}
```

属性值十六进制数值能用简写的尽量用简写

*推荐：*

```css
.cspm {
    color: #fff;
}
```

*不推荐：*

```css
.cspm {
    color: #ffffff;
}
```

不要为 `0` 指明单位

*推荐：*

```css
.cspm {
    margin: 0 10px;
}
```

*不推荐：*

```css
.cspm {
    margin: 0px 10px;
}
```

### 属性值引号

css属性值需要用到引号时，统一使用单引号

```css
/* 推荐 */
.cspm {
	font-family: 'Hiragino Sans GB';
}

/* 不推荐 */
.cspm {
	font-family: "Hiragino Sans GB";
}
```

### 属性书写顺序

建议遵循以下顺序：

1. 布局定位属性：display / position / float / clear  / visibility / overflow
2. 自身属性：width / height / margin / padding / border / background
3. 文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
4. 其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient ...

```css
.cspm {
    display: block;
    position: relative;
    float: left;
    width: 100px;
    height: 100px;
    margin: 0 10px;
    padding: 20px 0;
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    color: #333;
    background: rgba(0,0,0,.5);
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```


[mozilla官方属性顺序推荐](https://www.mozilla.org/css/base/content.css)

### CSS3浏览器私有前缀写法

CSS3 浏览器私有前缀在前，标准前缀在后

```css
.cspm {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```
更多关于浏览器私有前辍写法：[#Vendor-specific extensions](http://www.w3.org/TR/2011/REC-CSS2-20110607/syndata.html#vendor-keywords)


# JavaScript规范


### 单行代码块

在单行代码块中使用空格

*不推荐*

```js
function foo () {return true}
if (foo) {bar=0}
```

*推荐*

```js
function foo () { return true }
if (foo) { bar = 0 }
```

### 大括号风格

在编程过程中，大括号风格与缩进风格紧密联系，用来描述大括号相对代码块位置的方法有很多。在 JavaScript 中，主要有三种风格，如下：

- **One True Brace Style**

  ```js
  if (foo) {
    bar()
  } else {
    baz()
  }
  ```

- **Stroustrup(推荐)**

  ```js
  if (foo) {
    bar()
  }
  else {
    baz()
  }
  ```

- **Allman**

  ```js
  if (foo)
  {
    bar()
  }
  else
  {
    baz()
  }
  ```

我们团队约定使用 `Stroustrup` 风格

### 变量命名

当命名变量时，主流分为驼峰式命名（variableName）和下划线命名（variable_name）两大阵营。

- 团队约定使用驼峰式命名

### 拖尾逗号

在 ECMAScript5 里面，对象字面量中的拖尾逗号是合法的，但在 IE8（非 IE8 文档模式）下，当出现拖尾逗号，则会抛出错误。

拖尾逗号的例子：

```js
var foo = {
  name: 'foo',
  age: '22',
}
```

拖尾逗号的好处是，简化了对象和数组添加或删除元素，我们只需要修改新增的行即可，并不会增加差异化的代码行数。

> 因为拖尾逗号有好也有不好，所以团队约定允许在最后一个元素或属性与闭括号 `]` 或 `}` 在不同行时，可以（但不要求）使用拖尾逗号。当在同一行时，禁止使用拖尾逗号。

### 逗号空格

逗号前后的空格可以提高代码的可读性，团队约定在逗号后面使用空格，逗号前面不加空格。

*不推荐*

```js
var foo = 1,bar = 2
var foo = 1 , bar = 2
var foo = 1 ,bar = 2
```

*推荐*

```js
var foo = 1, bar = 2
```

### 逗号风格

逗号分隔列表时，在 JavaScript 中主要有两种逗号风格：
- 标准风格，逗号放置在当前行的末尾
- 逗号前置风格，逗号放置在下一行的开始位置

> 团队约定使用标准风格

*不推荐*

```js
var foo = 1
,
bar = 2

var foo = 1
, bar = 2

var foo = ['name'
          , 'age']
```

*推荐*

```js
var foo = 1,
    bar = 2

var foo = ['name',
            'age']
```

### 计算属性的空格

团队约定在对象的计算属性内，禁止使用空格

*不推荐*

```js
obj['foo' ]
obj[ 'foo']
obj[ 'foo' ]
```

*推荐*

```js
obj['foo']
```

### 函数调用

为了避免语法错误，团队约定在函数调用时，禁止使用空格

*不推荐*

```js
fn ()
fn
()
```

*推荐*

```js
fn()
```

### 缩进

代码保持一致的缩进，是作为工程师的职业素养。但缩进用两个空格，还是四个空格，是用 `Tab` 还是空格呢？这样的争论太多了，也得不出答案。本规范结合了市面上优秀的开源项目，姑且约定使用 `空格` 来缩进，而且缩进使用两个空格。

那是不是不能使用 `Tab` 进行缩进了？我们可以通过编辑器配置 ，将 `Tab` 自动转换为空格。

### 对象字面量的键值缩进

团队约定对象字面量的键和值之间不能存在空格，且要求对象字面量的冒号和值之间存在一个空格

*不推荐*

```js
var obj = { 'foo' : 'haha' }
```

*推荐*

```js
var obj = { 'foo': 'haha' }
```

### 构造函数首字母大写

在 JavaScript 中 `new` 操作符用来创建某个特定类型的对象的一个实例，该类型的对象是由一个构造函数表示的。由于构造函数只是常规函数，唯一区别是使用 `new` 来调用。所以我们团队约定构造函数的首字母要大小，以此来区分构造函数和普通函数。

*不推荐*

```js
var fooItem = new foo()
```

*推荐*

```js
var fooItem = new Foo()
```

### 构造函数的参数

在 JavaScript 中，通过 `new` 调用构造函数时，如果不带参数，可以省略后面的圆括号。但这样会造成与整体的代码风格不一致，所以团队约定使用圆括号

*不推荐*

```js
var person = new Person
```

*推荐*

```js
var person = new Person()
```

### 链式调用

链式调用如果放在同一行，往往会造成代码的可读性差，但有些时候，短的链式调用并不会影响美观。所以本规范约定一行最多只能有四个链式调用，超过就要求换行。

### 空行

空白行对于分离代码逻辑有帮助，但过多的空行会占据屏幕的空间，影响可读性。团队约定最大连续空行数为 2

*不推荐*

```js
var a = 1



var b = 2
```

*推荐*

```js
var a = 1


var b = 2
```

### 链式赋值

链式赋值容易造成代码的可读性差，所以团队约定禁止使用链式赋值

*不推荐*

```js
var a = b = c = 1
```

*推荐*

```js
var a = 1
var b = 1
var c = 1
```

### 变量声明

JavaScript 允许在一个声明中，声明多个变量。团队约定在声明变量时，一个声明只能有一个变量

*不推荐*

```js
var a, b, c
```

*推荐*

```js
var a
var b
var c
```

### 代码块空格

一致性是任何风格指南的重要组成部分。虽然在哪里放置块的开括号纯属个人偏好，但在整个项目中应该保持一致。不一致的风格将会分散读者阅读代码的注意力。

> 团队约定代码块前要添加空格

*不推荐*

```js
if (a){
  b()
}

function a (){}
```

*推荐*

```js
if (a) {
  b()
}

function a () {}
```

### 函数声明的空格

当格式化一个函数，函数名或 function 关键字与左括号之间允许有空白。命名函数要求函数名和 function 关键字之间不加空格，但是匿名函数要求不加空格。

> 团队约定函数括号前要加空格

*不推荐*

```js
function func(x) {
  // ...
}
```

*推荐*

```js
function func (x) {
  // ...
}
```

### 操作符的空格

团队约定操作符前后都需要添加空格

*不推荐*

```js
var sum = 1+2
```

*推荐*

```js
var sum = 1 + 2
```
