# 时间轴

---

### 使用指南

在 Taro 文件中引入组件

```js
import { CuTimeline } from "taro-color-ui";
```

**组件依赖的样式文件（仅按需引用时需要）**

```scss
@import "~taro-color-ui/dist/style/components/timeline.scss";
```

### 用法

```jsx
<CuTimeline time="昨天">
  <CuTimeline.Item
    shadow
    color="#39b54a"
    left={<CuIcon value="noticefill" size="15" />}
  >
    <View style={{ color: "#fff" }}>
      <Text>23:59</Text> 【火星】快件已到达地球
    </View>
  </CuTimeline.Item>

  <CuTimeline.Item
    shadow
    color="#e54d42"
    left={
      <CuIcon
        value="attentionforbidfill"
        size="15"
        color="#e54d42"></CuIcon>
      }>
        <View style={{ color: "#fff" }}>
          <Text>15:00</Text>【地球】快件接收中！
        </View>
  </CuTimeline.Item>

  <CuTimeline.Item color="#0081ff" shadow>
    <View style={{ color: "#fff" }}>
      <Text>20:00</Text> 【北京】快件已到达北京，准备发往上海
    </View>
  </CuTimeline.Item>

  <CuTimeline.Item color="#1cbbb4" shadow>
    <View style={{ color: "#fff" }}>
      <Text>10:00</Text>【天津】快件已到达天津，准备发往上海
    </View>
  </CuTimeline.Item>

  <CuTimeline.Item color="#9c26b0" shadow>
    <View style={{ color: "#fff" }}>
      <Text>10:00</Text>【南京】快件已到达南京，准备发往上海
    </View>
  </CuTimeline.Item>
</CuTimeline>

<CuTimeline time="6-06">
  <CuTimeline.Item color="#8799a3" shadow>
    <View style={{ color: "#fff" }}>
      <Text>10:00</Text>【上海】快件已到达上海，准备配送
    </View>
  </CuTimeline.Item>
</CuTimeline>

<CuTimeline time="6-08">
  <CuTimeline.Item color="#f1f1f1" shadow>
    <CuTag type="ghost" radius color="blue">
      上午11点
    </CuTag>
    <View>快件已被签收！</View>
  </CuTimeline.Item>
</CuTimeline>
```

### Timeline 参数

| 属性 | 说明 | 类型   | 默认值 |
| ---- | ---- | ------ | ------ |
| time | 时间 | string | 无     |

### Timeline.Item 参数

| 属性   | 说明           | 类型            | 默认值    |
| ------ | -------------- | --------------- | --------- |
| color  | 颜色           | string          | `#f1f1f1` |
| shadow | 是否显示阴影   | boolean         | false     |
| left   | 左侧内容自定义 | React.ReactNode | 无        |

### 预览
<img src="https://bangyanglao.oss-cn-shenzhen.aliyuncs.com/images/upload-dev/miniapp/20201019/20201020160730.jpg" height="100%">
