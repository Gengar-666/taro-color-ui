import React from "react";
import { View, Text } from "@tarojs/components";
import { CuSwiper, CuNavigation } from "taro-color-ui";

const Index: React.FC = () => {
  const imgs = [
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602779302629&di=a59d188a4b2cd89a357e23e491bb2ae3&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2020-02-24%2F5e53769b7dd71.jpg",
    "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1957580000,2550223445&fm=26&gp=0.jpg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602779658189&di=e5ebed3278332074bc01228b2e4a7cdb&imgtype=0&src=http%3A%2F%2Fcdnsource.9377.com%2Fuploads%2F2015-08%2F07%2F0a6653d46da37d7a.jpg"
  ];

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
        images={imgs}
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
        images={imgs}
      ></CuSwiper>
    </View>
  );
};

export default Index;
