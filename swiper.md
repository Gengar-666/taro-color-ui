# 轮播

---

### 使用指南

在 Taro 文件中引入组件

```js
import { CuSwiper } from "taro-color-ui";
```

**组件依赖的样式文件（仅按需引用时需要）**

```scss
@import "~taro-color-ui/dist/style/components/swiper.scss";
```

### 用法

```js
const imgs = ["1.png", "2.png", "3.png"];
```

> 全屏轮播

```jsx
<CuSwiper
  indicatorDots
  circular
  autoplay
  interval={3000}
  duration={500}
  images={imgs}
></CuSwiper>
```

> 卡片式轮播

```jsx
<CuSwiper
  type="card"
  indicatorDots
  circular
  autoplay
  interval={3000}
  duration={500}
  indicatorColor="#8799a3"
  indicatorActiveColor="#0081ff"
  images={imgs}
></CuSwiper>
```

### Progress 参数

| 属性                 | 说明                 | 类型                       | 默认值            |
| -------------------- | -------------------- | -------------------------- | ----------------- |
| images               | 数据                 | string[]                   | [ ]               |
| dotStyle             | 指示点样式类型       | `round-dot` / `square-dot` | `round-dot`       |
| type                 | 类型                 | `screen` / `card`          | `screen`          |
| indicatorDots        | 是否显示面板指示点   | boolean                    | false             |
| indicatorColor       | 指示点颜色           | string                     | rgba(0, 0, 0, .3) |
| indicatorActiveColor | 当前选中的指示点颜色 | string                     | #000000           |
| autoplay             | 是否自动切换         | boolean                    | false             |
| current              | 当前所在滑块的 index | number                     | 0                 |
| interval             | 自动切换时间间隔     | number                     | 5000              |
| duration             | 滑动动画时长         | number                     | 500               |
| circular             | 是否采用衔接滑动     | boolean                    | false             |

### Swiper 事件

| 事件名称 | 说明               | 返回参数     |
| -------- | ------------------ | ------------ |
| onClick  | 点击 item 时触发   | index:number |
| onChange | current 改变时触发 | event 对象   |
