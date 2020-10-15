# 头像

---

### 使用指南

在 Taro 文件中引入组件

```js
import { CuAvatar } from "taro-color-ui";
```

**组件依赖的样式文件（仅按需引用时需要）**

```scss
@import "~taro-color-ui/dist/style/components/avatar.scss";
```

### 一般用法

```jsx
<CuAvatar src="xxx.png"></CuAvatar>
```

### 头像形状

```jsx
<CuAvatar src="xxx.png" round></CuAvatar>
<CuAvatar src="xxx.png" radius></CuAvatar>
```

### 头像尺寸

```jsx
<CuAvatar src="xxx.png" size="small"></CuAvatar>
<CuAvatar src="xxx.png" size="large"></CuAvatar>
<CuAvatar src="xxx.png" size="xl"></CuAvatar>
```

### 文字头像

```jsx
<CuAvatar radius text="A"></CuAvatar>
```

### 头像组

```jsx
<CuAvatar.Group>
  <CuAvatar src="xxx.png" round size="large"></CuAvatar>
  <CuAvatar src="xxx.png" round size="large"></CuAvatar>
  <CuAvatar src="xxx.png" round size="large"></CuAvatar>
  <CuAvatar src="xxx.png" round size="large"></CuAvatar>
</CuAvatar.Group>
```

### Avatar 参数

| 属性   | 说明           | 类型                                  | 默认值   |
| ------ | -------------- | ------------------------------------- | -------- |
| src    | 头像地址       | string                                | 无       |
| round  | 是否为圆形头像 | boolean                               | false    |
| radius | 是否为圆角头像 | boolean                               | false    |
| size   | 大小           | `small` /`normal` / `large` / `xl`    | `normal` |
| text   | 文字           | string                                | 无       |
| color  | 颜色           | string（请使用内置颜色，比如 `blue`） | 无       |
