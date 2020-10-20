# 栅格布局

---

### 使用指南

在 Taro 文件中引入组件

```js
import { CuGrid } from "taro-color-ui";
```

**组件依赖的样式文件（仅按需引用时需要）**

```scss
@import "~taro-color-ui/dist/style/components/grid.scss";
```

### 用法

```jsx
<CuGrid
  data={[
    {
      icon: "xxx.png",
      badge: 120,
      name: "图片icon"
    },
    {
      icon: <CuIcon value="cardboardfill" color="#e54d42" />,
      badge: 120,
      name: "VR"
    },
    {
      icon: <CuIcon value="recordfill" color="#f37b1d" />,
      badge: 1,
      name: "录像"
    },
    {
      icon: <CuIcon value="picfill" color="#fbbd08" />,
      name: "图像"
    },
    {
      icon: <CuIcon value="noticefill" color="#8dc63f" />,
      badge: 22,
      name: "通知"
    },
    {
      icon: <CuIcon value="upstagefill" color="#39b54a" />,
      name: "排行榜"
    },
    {
      icon: <CuIcon value="clothesfill" color="#1cbbb4" />,
      name: "皮肤"
    },
    {
      icon: <CuIcon value="discoverfill" color="#0081ff" />,
      name: "发现"
    },
    {
      icon: <CuIcon value="questionfill" color="#6739b6" />,
      name: "帮助"
    }
  ]}
  onClick={(item, index) => console.log(item, index)}
></CuGrid>
```

### Progress 参数

| 属性       | 说明           | 类型                                                       | 默认值    |
| ---------- | -------------- | ---------------------------------------------------------- | --------- |
| data       | 数据           | Array<{icon: React.ReactNode,badge?: number,name: string}> | [ ]       |
| columnNum  | 每一列有多少个 | 1 - 5                                                      | 3         |
| border     | 是否有边框     | boolean                                                    | false     |
| badgeColor | 徽章颜色       | string                                                     | `#dd514c` |
| radius     | 是否为圆角     | boolean                                                    | false     |


### 预览
![avatar](https://bangyanglao.oss-cn-shenzhen.aliyuncs.com/images/upload-dev/miniapp/20201019/20201020161206.jpg)
