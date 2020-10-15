# 快速上手

---

### 安装

```bash
$ npm install taro-color-ui
```

### 使用

> 引入所需组件

```js
// page.js
import { CuButton } from "taro-color-ui";

// app.js 全局引入一次即可
import "taro-color-ui/dist/style/index.scss";
```

> 引入组件样式的三种方式

```js
// app.js
import "taro-ui/dist/style/index.scss"; // 方式一
```

```scss
// app.scss
@import "~taro-ui/dist/style/index.scss"; //  方式二
```

```scss
// 按需导入
@import "~taro-color-ui/dist/style/components/button.scss"; // 方式三
```

## 示例

```jsx
import React from "react";
import { View } from "@tarojs/components";
import { CuButton } from "taro-color-ui";
import "./index.scss";

const Page: React.FC = () => {
  return <CuButton inline>按钮文案</CuButton>;
};

export default Page;
```

在 `app.scss` 文件中添加如下代码

```scss
@import "~taro-color-ui/dist/style/index.scss"; // 引入组件样式，仅需引入一次即可
```

> 按需引入

如果你只希望引入部分组件，比如 Button，那么可以只 `@import` 需要的样式文件

```scss
@import "~taro-color-ui/dist/style/components/button.scss";
```
