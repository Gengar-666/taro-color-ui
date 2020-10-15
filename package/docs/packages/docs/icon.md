# 图标

---

### 使用指南

在 Taro 文件中引入组件

```js
import { CuIcon } from "taro-color-ui";
```

**组件依赖的样式文件（仅按需引用时需要）**

```scss
@import "~taro-color-ui/dist/style/components/icon.scss";
```

### 一般用法

```jsx
<CuIcon value="emoji" size="20" color="#333"></CuIcon>
```

### Icon 参数

| 属性  | 说明     | 类型          | 默认值 |
| ----- | -------- | ------------- | ------ |
| value | 图标图案 | string        | 无     |
| size  | 图标大小 | string/number | 24     |
| color | 图标颜色 | string        | #888   |
