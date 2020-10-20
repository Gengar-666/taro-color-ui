# 标签页

---

### 使用指南

在 Taro 文件中引入组件

```js
import { CuTabs } from "taro-color-ui";
```

**组件依赖的样式文件（仅按需引用时需要）**

```scss
@import "~taro-color-ui/dist/style/components/tabs.scss";
```

### 用法

> 等宽标签栏

```jsx
<CuTabs
  tabs={[
    { title: "tab-1", key: "t1" },
    { title: "tab-2", key: "t2" },
    { title: "tab-3", key: "t3" }
  ]}
  current={0}
  height="50px"
>
  <View key="t1">标签1-内容</View>
  <View key="t2">标签2-内容</View>
  <View key="t3">标签3-内容</View>
</CuTabs>
```

> 居中标签栏

```jsx
<CuTabs
  tabs={[
    { title: "tab-1", key: "t1" },
    { title: "tab-2", key: "t2" },
    { title: "tab-3", key: "t3" }
  ]}
  current={0}
  center
  height="50px"
>
  <View key="t1">标签1-内容</View>
  <View key="t2">标签2-内容</View>
  <View key="t3">标签3-内容</View>
</CuTabs>
```

> 滚动标签栏

```jsx
<CuTabs
  tabs={[
    { title: "tab-1", key: "t1" },
    { title: "tab-2", key: "t2" },
    { title: "tab-3", key: "t3" },
    { title: "tab-4", key: "t4" },
    { title: "tab-5", key: "t5" },
    { title: "tab-6", key: "t6" },
    { title: "tab-7", key: "t7" },
    { title: "tab-8", key: "t8" },
    { title: "tab-9", key: "t9" },
    { title: "tab-10", key: "t10" }
  ]}
  scroll
  height="50px"
>
  <View key="t1">标签1-内容</View>
  <View key="t2">标签2-内容</View>
  <View key="t3">标签3-内容</View>
  <View key="t4">标签4-内容</View>
  <View key="t5">标签5-内容</View>
  <View key="t6">标签6-内容</View>
  <View key="t7">标签7-内容</View>
  <View key="t8">标签8-内容</View>
  <View key="t9">标签9-内容</View>
  <View key="t10">标签10-内容</View>
</CuTabs>
```

> 自定义颜色

```jsx
<CuTabs
  tabs={[
    { title: "tab-1", key: "t1" },
    { title: "tab-2", key: "t2" },
    { title: "tab-3", key: "t3" }
  ]}
  height="50px"
  color="#a5673f"
  activeColor="#f37b1d"
>
  <View key="t1">标签1-内容</View>
  <View key="t2">标签2-内容</View>
  <View key="t3">标签3-内容</View>
</CuTabs>
```

> 自定义标题

```jsx
<CuTabs
  tabs={[
    {
      title: (
        <React.Fragment>
          <CuIcon value="emoji"></CuIcon>
        </React.Fragment>
      ),
      key: "t1"
    },
    {
      title: (
        <React.Fragment>
          <CuIcon value="moneybag"></CuIcon>
        </React.Fragment>
      ),
      key: "t2"
    },
    {
      title: (
        <React.Fragment>
          <CuIcon value="github"></CuIcon>
        </React.Fragment>
      ),
      key: "t3"
    }
  ]}
  onChange={(item, index) => console.log(item, index)}
  height="50px"
>
  <View key="t1">标签1-内容</View>
  <View key="t2">标签2-内容</View>
  <View key="t3">标签3-内容</View>
</CuTabs>
```

### Tabs 参数

| 属性           | 说明                           | 类型                                                                 | 默认值               |
| -------------- | ------------------------------ | -------------------------------------------------------------------- | -------------------- |
| tabs           | tab 数据                       | Array<{ title: React.ReactNode; key: string }>                       | 无                   |
| center         | 是否居中显示                   | boolean                                                              | false                |
| color          | 未选中的颜色                   | string                                                               | `#000`               |
| activeColor    | 选中的颜色                     | string                                                               | `#0081ff`            |
| swipeable      | 是否支持手势滑动切换内容页     | boolean                                                              | true                 |
| animated       | 是否开启切换动画               | boolean                                                              | true                 |
| scroll         | 是否滚动，当标签太多时建议使用 | boolean                                                              | false                |
| height         | 内容区域高度                   | string                                                               | `calc(100vh - 45PX)` |
| easingFunction | 切换缓动动画类型               | `default`/`linear`/ `easeInCubic`/ `easeOutCubic` / `easeInOutCubic` | `default`            |

### Tabs 事件

| 事件名称 | 说明                     | 返回参数                                                        |
| -------- | ------------------------ | --------------------------------------------------------------- |
| onChange | tab 的索引发生变化是触发 | tabData: { title: React.ReactNode; key: string }, index: number |

### 预览
![avatar](https://bangyanglao.oss-cn-shenzhen.aliyuncs.com/images/upload-dev/miniapp/20201019/20201020160548.jpg)
