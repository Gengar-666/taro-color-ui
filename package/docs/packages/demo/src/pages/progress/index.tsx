import React from "react";
import { View, Text } from "@tarojs/components";
import { CuProgress, CuNavigation } from "taro-color-ui";

const Index: React.FC = () => {
  return (
    <View>
      <CuNavigation
        color="#fff"
        bgColor="linear-gradient(135deg, #F97794 10%, #623AA2 100%)"
        leftSolt="返回"
      >
        进度条
      </CuNavigation>

      <View className="cu-bar bg-white solid-bottom">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>进度条形状
        </View>
      </View>
      <View className="padding flex flex-wrap justify-between align-center bg-white">
        <CuProgress value="0.3"></CuProgress>
        <CuProgress className="margin-top-sm" radius value="0.4"></CuProgress>
        <CuProgress className="margin-top-sm" round value="0.5"></CuProgress>
      </View>

      <View className="cu-bar bg-white solid-bottom margin-top">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>进度条尺寸
        </View>
      </View>
      <View className="padding flex flex-wrap justify-between align-center bg-white">
        <CuProgress value="0.6" round></CuProgress>
        <CuProgress
          className="margin-top-sm"
          size="small"
          value="0.6"
          round
        ></CuProgress>
        <CuProgress
          className="margin-top-sm"
          size="xs"
          value="0.6"
          round
        ></CuProgress>
      </View>

      <View className="cu-bar bg-white solid-bottom margin-top">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>自定义颜色
        </View>
      </View>
      <View className="padding flex flex-wrap justify-between align-center bg-white">
        <CuProgress color="green" value="0.5" round></CuProgress>
        <CuProgress
          className="margin-top-sm"
          color="blue"
          value="0.5"
          round
        ></CuProgress>
        <CuProgress
          className="margin-top-sm"
          color="grey"
          value="0.5"
          round
        ></CuProgress>
      </View>

      <View className="cu-bar bg-white solid-bottom margin-top">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>条纹
        </View>
      </View>
      <View className="padding flex flex-wrap justify-between align-center bg-white">
        <CuProgress striped radius value="0.8"></CuProgress>
      </View>

      <View className="cu-bar bg-white solid-bottom margin-top">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>不显示百分比
        </View>
      </View>
      <View className="padding flex flex-wrap justify-between align-center bg-white">
        <CuProgress round value="0.9" showProportion={false}></CuProgress>
      </View>
    </View>
  );
};

export default Index;
