# 步骤条

---

### 使用指南

在 Taro 文件中引入组件

```js
import { CuSteps } from "taro-color-ui";
```

**组件依赖的样式文件（仅按需引用时需要）**

```scss
@import "~taro-color-ui/dist/style/components/steps.scss";
```

### 用法

> 基本用法

```jsx
<CuSteps current={4}>
  <CuSteps.Item title="进行中" status="process"></CuSteps.Item>
  <CuSteps.Item title="等待" status="wait"></CuSteps.Item>
  <CuSteps.Item title="错误" status="error"></CuSteps.Item>
  <CuSteps.Item title="完成" status="finish"></CuSteps.Item>
</CuSteps>
```

> 箭头连接

```jsx
<CuSteps current={4} arrow>
  <CuSteps.Item title="进行中" status="process"></CuSteps.Item>
  <CuSteps.Item title="等待" status="wait"></CuSteps.Item>
  <CuSteps.Item title="错误" status="error"></CuSteps.Item>
  <CuSteps.Item title="完成" status="finish"></CuSteps.Item>
</CuSteps>
```

> 数字完成

```jsx
<CuSteps current={1} type="number">
  <CuSteps.Item title="进行中" status="process"></CuSteps.Item>
  <CuSteps.Item title="等待" status="wait"></CuSteps.Item>
  <CuSteps.Item title="错误" status="error"></CuSteps.Item>
  <CuSteps.Item title="完成" status="finish"></CuSteps.Item>
</CuSteps>
```

> 添加描述

```jsx
<CuSteps current={4}>
  <CuSteps.Item title="进行中">描述1</CuSteps.Item>
  <CuSteps.Item title="等待">描述2</CuSteps.Item>
  <CuSteps.Item title="错误">描述3</CuSteps.Item>
  <CuSteps.Item title="完成">描述4</CuSteps.Item>
</CuSteps>
```

### Steps 参数

| 属性        | 说明                 | 类型                         | 默认值   |
| ----------- | -------------------- | ---------------------------- | -------- |
| arrow       | 是否使用箭头代替横线 | boolean                      | false    |
| type        | 类型                 | `normal` / `number`          | `normal` |
| activeColor | 激活态颜色           | string(必须为组件内置颜色值) | `blue`   |
| current     | 当前步骤索引值       | number                       | 0        |

### Steps.Item 参数

| 属性        | 说明       | 类型                         | 默认值    |
| ----------- | ---------- | ---------------------------- | --------- |
| title       | 标题       | string                       | 无        |
| type        | 类型       | `normal` / `number`          | `normal`  |
| active      | 是否激活   | boolean                      | false     |
| activeColor | 激活态颜色 | string(必须为组件内置颜色值) | `blue`    |
| status      | 状态       | `wait`                       | `process` | `finish` | `error` | `wait` |


### 预览
![avatar](https://bangyanglao.oss-cn-shenzhen.aliyuncs.com/images/upload-dev/miniapp/20201019/20201020160904.jpg)
