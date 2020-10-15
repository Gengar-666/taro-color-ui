# 开关

---

### 使用指南

在 Taro 文件中引入组件

```js
import { CuSwitch } from "taro-color-ui";
```

**组件依赖的样式文件（仅按需引用时需要）**

```scss
@import "~taro-color-ui/dist/style/components/switch.scss";
@import "~taro-color-ui/dist/style/components/icon.scss";
```

### 用法

> 默认有 icon

```jsx
<CuSwitch></CuSwitch>
```

> 无 icon

```jsx
<CuSwitch showIcon={false}></CuSwitch>
```

> 自定义颜色

```jsx
<CuSwitch color="#0081ff" checked></CuSwitch>
```

> 禁用

```jsx
<CuSwitch checked disabled></CuSwitch>
```

### Switch 参数

| 属性     | 说明          | 类型    | 默认值    |
| -------- | ------------- | ------- | --------- |
| color    | 颜色          | string  | `#39b54a` |
| checked  | 是否显示开启  | boolean | false     |
| showIcon | 是否显示 icon | boolean | false     |
| disabled | 是否禁用      | boolean | false     |

### Switch 事件

| 事件名称 | 说明                 | 返回参数         |
| -------- | -------------------- | ---------------- |
| onChange | 状态改变时触发的事件 | checked: boolean |
