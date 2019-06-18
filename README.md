# PostCSS Group 
> shout to [johnie](https://github.com/johnie);<br/>

> 对[postcss-crip](https://www.npmjs.com/package/postcss-crip)的延伸添加了组合简写;

## Installation

```console
$ npm install postcss-group --save-dev
```

**Input:**

```css
/* Input example */
.crip {
  wh: 100px 100px;
  flc: 12px 20px #000;
}
```

**Output:**

```css
/* Output example */
.crip {
  width: 100px;
  height: 100px;
  font-size: 12px;
  line-height: 20px;
  color: #000;
}
```
#### [See the full list of abbreviations](https://github.com/uustoboy/group-css-properties)

## Options

_(default: `{}`)_


```js
var options = {
  'abc': ['a','b','c']
}

var output = postcss(crip(options))
  .process(css)
  .css;
```

**input.css**

```css
td { 
  abc: a b c;  
}
```

**output.css**

```css
td { 
  a: a;
  b: b;
  c: c;
}
```