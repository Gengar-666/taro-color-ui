# 模态框

---

### 使用指南

在 Taro 文件中引入组件

```js
import { CuModal } from "taro-color-ui";
```

**组件依赖的样式文件（仅按需引用时需要）**

```scss
@import "~taro-color-ui/dist/style/components/modal.scss";
```

### 用法

> 基础模态框

```jsx
<CuModal isOpened title="提示" confirmColor="#0081ff">
  这是基础模态框
</CuModal>
```

> 无标题模态框

```jsx
<CuModal isOpened confirmColor="#0081ff">
  无标题模态框
</CuModal>
```

> 无按钮模态框

```jsx
<CuModal showAction={false} isOpened title="提示" confirmColor="#0081ff">
  无按钮模态框
</CuModal>
```

> 底部模态框

```jsx
<CuModal
  position="bottom"
  isOpened
  cancelColor="#e54d42"
  confirmColor="#0081ff"
>
  底部模态框
</CuModal>
```

> 自定义模态框

```jsx
<CuModal showAction={false} isOpened>
  <View>
    <Image src="xxx.png"></Image>
    <View>
      <CuIcon value="close"></CuIcon>
    </View>
  </View>
</CuModal>
```

### Modal 参数

| 属性                | 说明                       | 类型              | 默认值   |
| ------------------- | -------------------------- | ----------------- | -------- |
| title               | 标题                       | string            | 无       |
| position            | 模态框出现的位置           | `center`/`bottom` | `center` |
| isOpened            | 是否显示模态框             | boolean           | 无       |
| showAction          | 是否显示显示操作按钮       | boolean           | true     |
| cancelText          | 取消按钮的文本             | string            | `取消`   |
| confirmText         | 确认按钮的文本             | string            | `确定`   |
| cancelColor         | 取消按钮的文本颜色         | string            | 无       |
| confirmColor        | 确认按钮的文本颜色         | string            | 无       |
| closeOnClickOverlay | 点击浮层的时候时候自动关闭 | boolean           | true     |

### Tabs 事件

| 事件名称  | 说明                   | 返回参数 |
| --------- | ---------------------- | -------- |
| onClose   | 触发关闭时的事件       | void     |
| onCancel  | 点击取消按钮触发的事件 | void     |
| onConfirm | 点击确认按钮触发的事件 | void     |
