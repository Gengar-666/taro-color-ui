# 进度条

---

### 使用指南

在 Taro 文件中引入组件

```js
import { CuProgress } from "taro-color-ui";
```

**组件依赖的样式文件（仅按需引用时需要）**

```scss
@import "~taro-color-ui/dist/style/components/progress.scss";
```

### 用法

```jsx
<CuProgress value="0.3"></CuProgress>
<CuProgress radius value="0.4"></CuProgress>
<CuProgress round value="0.5"></CuProgress>
<CuProgress size="small" value="0.6" round></CuProgress>
<CuProgress size="xs" value="0.6" round></CuProgress>
<CuProgress color="blue" value="0.5" round ></CuProgress>
<CuProgress striped radius value="0.8"></CuProgress>
<CuProgress round value="0.9" showProportion={false}></CuProgress>
```

### Progress 参数

| 属性           | 说明         | 类型                         | 默认值   |
| -------------- | ------------ | ---------------------------- | -------- |
| value          | 值           | number(0-1 之间)             | 0        |
| color          | 颜色         | string(必须为组件内置颜色值) | `red`    |
| round          | 是否为圆形   | boolean                      | false    |
| radius         | 是否为圆角   | boolean                      | false    |
| size           | 尺寸         | `normal` / `small` / `xs`    | `normal` |
| showProportion | 是否显示比例 | boolean                      | true     |
