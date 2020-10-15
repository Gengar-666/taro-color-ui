import React from "react";
import { View, Text } from "@tarojs/components";
import { CuSwiper, CuNavigation } from "taro-color-ui";

const Index: React.FC = () => {
  return (
    <View>
      <CuNavigation
        color="#fff"
        bgColor="linear-gradient(135deg, #81FFEF 10%, #F067B4 100%)"
        leftSolt="返回"
      >
        轮播
      </CuNavigation>

      <View className="cu-bar bg-white solid-bottom">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>全屏轮播
        </View>
      </View>
      <CuSwiper
        indicatorDots
        circular
        autoplay
        interval={3000}
        duration={500}
        images={[
          "https://material.etango.cn/2915%2F1600322372424.png",
          "https://material.etango.cn/2915%2F1600322372424.png",
          "https://material.etango.cn/2915%2F1600322372424.png"
        ]}
      ></CuSwiper>

      <View className="cu-bar bg-white solid-bottom margin-top">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>卡片式轮播
        </View>
      </View>
      <CuSwiper
        type="card"
        indicatorDots
        circular
        autoplay
        interval={3000}
        duration={500}
        indicatorColor="#8799a3"
        indicatorActiveColor="#0081ff"
        images={[
          "https://material.etango.cn/2915%2F1600322372424.png",
          "https://material.etango.cn/2915%2F1600322372424.png",
          "https://material.etango.cn/2915%2F1600322372424.png"
        ]}
      ></CuSwiper>
    </View>
  );
};

export default Index;
