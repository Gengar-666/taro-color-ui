import React from "react";
import { View, Text } from "@tarojs/components";
import { CuGrid, CuIcon, CuNavigation } from "taro-color-ui";

const data = [
  {
    icon: "https://material.etango.cn/2915%2F1600322372424.png",
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
];

const Index: React.FC = () => {
  return (
    <View>
      <CuNavigation
        color="#fff"
        bgColor="linear-gradient(135deg, #ABDCFF 10%, #0396FF 100%)"
        leftSolt="返回"
      >
        栅格布局
      </CuNavigation>

      <View className="cu-bar bg-white solid-bottom">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>有边框
        </View>
      </View>
      <CuGrid
        className="margin-top-sm"
        data={data}
        onClick={(item, index) => console.log(item, index)}
      ></CuGrid>

      <View className="cu-bar bg-white solid-bottom margin-top">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>无边框
        </View>
      </View>
      <CuGrid
        className="margin-top-sm"
        border={false}
        data={data}
        onClick={(item, index) => console.log(item, index)}
      ></CuGrid>
    </View>
  );
};

export default Index;
