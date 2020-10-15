import React from "react";
import { View, Text } from "@tarojs/components";
import { CuSwitch, CuNavigation } from "taro-color-ui";

const Switch: React.FC = () => {
  return (
    <View>
      <CuNavigation
        color="#fff"
        bgColor="linear-gradient(135deg, #FFD3A5 10%, #BB4E75 100%)"
        leftSolt="返回"
      >
        开关
      </CuNavigation>

      <View className="cu-bar bg-white solid-bottom">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>有icon
        </View>
      </View>
      <View className="padding flex flex-wrap justify-between align-center bg-white">
        <CuSwitch></CuSwitch>
      </View>

      <View className="cu-bar bg-white solid-bottom margin-top">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>无icon
        </View>
      </View>
      <View className="padding flex flex-wrap justify-between align-center bg-white">
        <CuSwitch showIcon={false}></CuSwitch>
      </View>

      <View className="cu-bar bg-white solid-bottom margin-top">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>自定义颜色
        </View>
      </View>
      <View className="padding flex flex-wrap justify-between align-center bg-white">
        <CuSwitch color="#0081ff" checked></CuSwitch>
      </View>

      <View className="cu-bar bg-white solid-bottom margin-top">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>禁用状态
        </View>
      </View>
      <View className="padding flex flex-wrap justify-between align-center bg-white">
        <CuSwitch checked disabled></CuSwitch>
      </View>
    </View>
  );
};

export default Switch;
