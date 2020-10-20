# 列表

---

### 使用指南

在 Taro 文件中引入组件

```js
import { CuList } from "taro-color-ui";
```

**组件依赖的样式文件（仅按需引用时需要）**

```scss
@import "~taro-color-ui/dist/style/components/list.scss";
```

### 用法

```jsx
<CuList>
  <CuList.Item title="无描述无箭头" action="我是action"></CuList.Item>

  <CuList.Item
    title="有描述有箭头"
    desc="我是描述我是描述"
    action="我是action"
    arrow
  ></CuList.Item>

  <CuList.Item
    title={
      <View>
        <CuIcon value="circlefill" color="#0081ff;" size={16}></CuIcon>
        <Text>带icon的标题</Text>
      </View>
    }
    desc={
      <View>
        <CuIcon value="infofill" color="e54d42" size={16}></CuIcon>
        <Text>带icon的描述信息</Text>
      </View>
    }
    action={
      <CuButton color="green" size="small" shadow>
        action
      </CuButton>
    }
    arrow
  ></CuList.Item>

  <CuList.Item
    title="switch"
    action={<CuSwitch></CuSwitch>}
    arrow
  ></CuList.Item>

  <CuList.Item
    title="tag"
    action={
      <View>
        <CuTag radius color="blue" type="ghost">
          tag-1
        </CuTag>
        <CuTag radius color="orange">
          tag-2
        </CuTag>
        <CuTag round color="purple">
          tag-3
        </CuTag>
      </View>
    }
    arrow
  ></CuList.Item>

  <CuList.Item
    title="avatar"
    action={
      <CuAvatar.Group>
        <CuAvatar src="xxx.png" round></CuAvatar>
        <CuAvatar src="xxx.png" round></CuAvatar>
        <CuAvatar src="xxx.png" round></CuAvatar>
        <CuAvatar src="xxx.png" round></CuAvatar>
      </CuAvatar.Group>
    }
    arrow
  ></CuList.Item>

  <CuList.Item
    title="swipeAction"
    arrow
    swipeAction={
      <React.Fragment>
        <View style={{ color: "#fff", backgroundColor: "#8799a3" }}>置顶</View>
        <View style={{ color: "#fff", backgroundColor: "#e54d42" }}>删除</View>
      </React.Fragment>
    }
  ></CuList.Item>
</CuList>
```

### List.Item 参数

| 属性        | 说明             | 类型            | 默认值 |
| ----------- | ---------------- | --------------- | ------ |
| title       | 标题             | React.ReactNode | 无     |
| desc        | 描述             | React.ReactNode | 无     |
| arrow       | 是否显示箭头     | boolean         | false  |
| action      | 动作面板内容     | React.ReactNode | 无     |
| swipeAction | 滑动动作面板内容 | React.ReactNode | 无     |

### List.Item 事件

| 事件名称 | 说明       | 返回参数   |
| -------- | ---------- | ---------- |
| onClick  | 点击时触发 | event 对象 |

### 预览
![avatar](https://bangyanglao.oss-cn-shenzhen.aliyuncs.com/images/upload-dev/miniapp/20201019/20201020160410.jpg)
