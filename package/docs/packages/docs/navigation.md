# 自定义导航

---

### 使用指南

在 Taro 文件中引入组件

```js
import { CuNavigation } from "taro-color-ui";
```

**组件依赖的样式文件（仅按需引用时需要）**

```scss
@import "~taro-color-ui/dist/style/components/navigation.scss";
```

### 用法

> 基本用法

```jsx
<CuNavigation color="#fff" bgColor="linear-gradient(45deg, #2AFADF, #4C83FF)">
  自定义导航
</CuNavigation>
```

> 自定义左侧内容

```jsx
<CuNavigation
  color="#fff"
  bgColor="linear-gradient(45deg, #F6D242, #FF52E5)"
  isBack={false}
  leftSolt={
    <View>
      <CuIcon value="github" color="#fff"></CuIcon>
    </View>
  }
>
  自定义左侧内容
</CuNavigation>
```

> 自定义右侧内容

```jsx
<CuNavigation
  color="#fff"
  bgColor="linear-gradient(45deg, #F6D242, #FF52E5)"
  isBack={false}
  rightSolt={
    <View>
      <CuIcon value="github" color="#fff"></CuIcon>
    </View>
  }
>
  自定义右侧内容
</CuNavigation>
```

> 自定义背景图片

```jsx
<CuNavigation color="#fff" bgImage="xxx.png">
  自定义背景图片
</CuNavigation>
```

### Progress 参数

| 属性      | 说明             | 类型            | 默认值 |
| --------- | ---------------- | --------------- | ------ |
| color     | 字体颜色         | string          | `#000` |
| bgColor   | 背景色           | string          | 无     |
| bgImage   | 自定义背景图片   | string          | 无     |
| isBack    | 是否显示返回箭头 | boolean         | true   |
| leftSolt  | 自定义左侧内容   | React.ReactNode | 无     |
| rightSolt | 自定义右侧内容   | React.ReactNode | 无     |
