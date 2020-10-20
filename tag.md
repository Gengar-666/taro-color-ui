# 标签

---

### 使用指南

在 Taro 文件中引入组件

```js
import { CuTag } from "taro-color-ui";
```

**组件依赖的样式文件（仅按需引用时需要）**

```scss
@import "~taro-color-ui/dist/style/components/tag.scss";
@import "~taro-color-ui/dist/style/components/icon.scss";
```

### 一般用法

```jsx
<CuTag>标签</CuTag>
<CuTag type="primary">标签</CuTag>
<CuTag type="ghost">镂空</CuTag>
<CuTag round>椭圆</CuTag>
<CuTag radius>圆角</CuTag>
<CuTag radius size="small">小尺寸</CuTag>
<CuTag radius>普通尺寸</CuTag>
<CuTag color="blue">亮色</CuTag>
<CuTag type="light" color="blue">浅色</CuTag>
```

### 胶囊标签

```jsx
<CuTag
  type="capsule"
  capsuleLeft={<Text className="cuIcon-likefill"></Text>}
  color="red">12</CuTag>

<CuTag
  type="capsule"
  capsuleLeft={<Text className="cuIcon-likefill"></Text>}
  color="blue"
  round>23</CuTag>

<CuTag
  type="capsule"
  capsuleLeft="说明"
  color="blue"
  round>123</CuTag>

<CuTag
  type="capsule"
  capsuleLeft={<Text className="cuIcon-likefill"></Text>}
  color="grey"
  radius>23</CuTag>

<CuTag
  type="capsule"
  capsuleLeft={<Text className="cuIcon-likefill"></Text>}
  color="brown"
  radius
  size="small">23</CuTag>
```

### Tag 参数

| 属性        | 说明              | 类型                                | 默认值    |
| ----------- | ----------------- | ----------------------------------- | --------- |
| type        | 类型              | `primary`/`ghost`/`light`/`capsule` | `primary` |
| size        | 大小              | `normal`/`small`                    | `normal`  |
| round       | 是否为圆形        | boolean                             | false     |
| radius      | 是否为圆角        | boolean                             | false     |
| color       | 颜色              | string                              | 无        |
| capsuleLeft | 胶囊 tag 左侧内容 | React.ReactNode                     | 无        |

### Tag 事件

| 事件名称 | 说明           | 返回参数   |
| -------- | -------------- | ---------- |
| onClick  | 点击按钮时触发 | event 对象 |


### 预览
![avatar](https://bangyanglao.oss-cn-shenzhen.aliyuncs.com/images/upload-dev/miniapp/20201019/20201020160014.jpg)
