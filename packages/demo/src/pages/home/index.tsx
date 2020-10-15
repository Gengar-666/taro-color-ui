import React from "react";
import { View, Text, Image } from "@tarojs/components";
import { CuNavigation, CuIcon } from "taro-color-ui";
import Taro from "@tarojs/taro";
import Logo from "./../../assets/logo.png";
import "./index.scss";

const Index: React.FC = () => {
  const components = [
    {
      name: "图标",
      path: "/pages/icon/index"
    },
    {
      name: "按钮",
      path: "/pages/button/index"
    },
    {
      name: "头像",
      path: "/pages/avatar/index"
    },
    {
      name: "标签",
      path: "/pages/tag/index"
    },
    {
      name: "开关",
      path: "/pages/switch/index"
    },
    {
      name: "列表",
      path: "/pages/list/index"
    },
    {
      name: "标签页",
      path: "/pages/tabs/index"
    },
    {
      name: "模态框",
      path: "/pages/modal/index"
    },
    {
      name: "时间轴",
      path: "/pages/timeline/index"
    },
    {
      name: "步骤条",
      path: "/pages/steps/index"
    },
    {
      name: "进度条",
      path: "/pages/progress/index"
    },
    {
      name: "栅格布局",
      path: "/pages/grid/index"
    },
    {
      name: "轮播",
      path: "/pages/swiper/index"
    },
    {
      name: "自定义导航",
      path: "/pages/navigation/index"
    }
  ];

  return (
    <View className="padding-sm">
      <CuNavigation
        color="#fff"
        bgColor="linear-gradient(135deg, #81FFEF 10%, #F067B4 100%)"
        isBack={false}
      >
        <View className="flex align-center">
          <Image className="logo margin-right-sm" src={Logo}></Image>
          <Text className="name">Taro Color UI</Text>
        </View>
      </CuNavigation>

      {components.map((comp) => (
        <View
          className="cu-bar bg-white margin-bottom-sm"
          key={comp.name}
          onClick={() => Taro.navigateTo({ url: comp.path })}
        >
          <View className="action">
            <Text className="cuIcon-title text-blue"></Text>
            {comp.name}
          </View>
          <View className="action">
            <CuIcon value="right" size="15"></CuIcon>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Index;
