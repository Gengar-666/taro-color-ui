# 按钮

---

### 使用指南

在 Taro 文件中引入组件

```js
import { CuButton } from "taro-color-ui";
```

**组件依赖的样式文件（仅按需引用时需要）**

```scss
@import "~taro-color-ui/dist/style/components/button.scss";
@import "~taro-color-ui/dist/style/components/icon.scss";
```

### 一般用法

```jsx
<CuButton>按钮文案</CuButton>
<CuButton type="primary">主要按钮</CuButton>
<CuButton type="ghost">镂空按钮</CuButton>
```

### 按钮尺寸

```jsx
<CuButton size="normal">默认大小</CuButton>
<CuButton size="small">小尺寸</CuButton>
<CuButton size="large">大尺寸</CuButton>
```

### 圆角按钮

```jsx
<CuButton round>按钮文案</CuButton>
```

### 按钮颜色

> 内置颜色

```jsx
const btns = [
  {
    color: "red",
    text: "嫣红"
  },
  {
    color: "orange",
    text: "桔橙"
  },
  {
    color: "yellow",
    text: "明黄"
  },
  {
    color: "olive",
    text: "橄榄"
  },
  {
    color: "green",
    text: "森绿"
  },
  {
    color: "cyan",
    text: "天青"
  },
  {
    color: "blue",
    text: "海蓝"
  },
  {
    color: "purple",
    text: "姹紫"
  },
  {
    color: "mauve",
    text: "木槿"
  },
  {
    color: "pink",
    text: "桃粉"
  },
  {
    color: "brown",
    text: "棕褐"
  },
  {
    color: "grey",
    text: "玄灰"
  },
  {
    color: "gray",
    text: "草灰"
  },
  {
    color: "black",
    text: "墨黑"
  },
  {
    color: "white",
    text: "雅白"
  }
];

{
  btns.map((btn) => <CuButton color={btn.color}>{btn.text}</CuButton>);
}
```

> 自定义颜色

```jsx
<CuButton customColor="#1a2a3c">自定义颜色</CuButton>
<CuButton customColor="linear-gradient(to right, #ec008c, #6739b6)">
  自定义渐变色
</CuButton>
```

### 行内按钮

```jsx
<CuButton inline>按钮文案</CuButton>
```

### 阴影按钮

```jsx
<CuButton shadow>按钮文案</CuButton>
```

### 按钮带 icon

```jsx
<CuButton icon="upload">图标</CuButton>
<CuButton loading>加载</CuButton>
<CuButton nativeLoading>微信加载</CuButton>
```

### Button 参数

| 属性          | 说明                                         | 类型                 | 默认值      |
| ------------- | -------------------------------------------- | -------------------- | ----------- |
| type          | 按钮类型，可选值为`primary`/`ghost`/或者不设 | string               | `primary`   |
| size          | 按钮大小，可选值为`large`/`normal`/`small`   | string               | `normal`    |  |
| disabled      | 设置禁用                                     | boolean              | false       |
| customStyle   | 自定义样式                                   | Object               | 无          |
| inline        | 是否设置为行内按钮                           | boolean              | false       |
| loading       | 设置按钮载入状态                             | boolean              | false       |
| nativeLoading | 设置按钮是否为原生加载状态                   | boolean              | false       |
| icon          | [CuIcon]() 组件里内置的某个 icon 的值        | string               |
| prefixCls     | class 前缀                                   | string               | `cu-button` |
| className     | 样式类名                                     | string               | 无          |
| round         | 设置按钮圆角                                 | boolean              | false       |
| color         | 颜色                                         | string(值为内置颜色) | 无          |
| customColor   | 自定义颜色                                   | string               | 无          |
| customStyle   | 自定义样式                                   | string               | 无          |
| shadow        | 是否添加阴影                                 | boolean              | false       |

### Button 事件

| 事件名称         | 说明                                                                                           | 返回参数   |
| :--------------- | :--------------------------------------------------------------------------------------------- | :--------- |
| onClick          | 点击按钮时触发                                                                                 | event 对象 |
| onGetUserInfo    | 参考[微信 button 文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | event 对象 |
| onContact        | 参考[微信 button 文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | event 对象 |
| onGetPhoneNumber | 参考[微信 button 文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | event 对象 |
| onError          | 参考[微信 button 文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | event 对象 |
| onOpenSetting    | 参考[微信 button 文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | event 对象 |
