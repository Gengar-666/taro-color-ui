import React from "react";
import { View, Text } from "@tarojs/components";
import { CuButton, CuNavigation, CuSwitch } from "taro-color-ui";

const Button: React.FC = () => {
  const btns = [
    {
      color: "red",
      text: "嫣红"
    },
    {
      color: "orange",
      text: "桔橙"
    },
    {
      color: "yellow",
      text: "明黄"
    },
    {
      color: "olive",
      text: "橄榄"
    },
    {
      color: "green",
      text: "森绿"
    },
    {
      color: "cyan",
      text: "天青"
    },
    {
      color: "blue",
      text: "海蓝"
    },
    {
      color: "purple",
      text: "姹紫"
    },
    {
      color: "mauve",
      text: "木槿"
    },
    {
      color: "pink",
      text: "桃粉"
    },
    {
      color: "brown",
      text: "棕褐"
    },
    {
      color: "grey",
      text: "玄灰"
    },
    {
      color: "gray",
      text: "草灰"
    },
    {
      color: "black",
      text: "墨黑"
    },
    {
      color: "white",
      text: "雅白"
    }
  ];

  const [shadow, setShadow] = React.useState(false);

  return (
    <View>
      <CuNavigation
        color="#fff"
        bgColor="linear-gradient(135deg, #43CBFF 10%, #9708CC 100%)"
        leftSolt="返回"
      >
        按钮
      </CuNavigation>

      <View className="cu-bar bg-white solid-bottom">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>按钮形状
        </View>
      </View>
      <View className="padding flex flex-wrap justify-between align-center bg-white">
        <CuButton inline>默认</CuButton>
        <CuButton round inline>
          圆角
        </CuButton>
      </View>

      <View className="cu-bar margin-top bg-white solid-bottom">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>按钮尺寸
        </View>
      </View>
      <View className="padding flex flex-wrap justify-between align-center bg-white">
        <CuButton size="small" round inline>
          小尺寸
        </CuButton>
        <CuButton round inline>
          默认
        </CuButton>
        <CuButton size="large" round inline>
          大尺寸
        </CuButton>
      </View>

      <View className="cu-bar margin-top bg-white solid-bottom">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>按钮颜色
        </View>
        <View className="action">
          <Text className="margin-right">阴影</Text>
          <CuSwitch
            checked={shadow}
            onChange={(checked) => setShadow(checked)}
          ></CuSwitch>
        </View>
      </View>
      <View className="grid col-5 padding-sm">
        {btns.map((btn) => (
          <View className="margin-tb-sm text-center" key={btn.color}>
            <CuButton color={btn.color} shadow={shadow} round inline>
              {btn.text}
            </CuButton>
          </View>
        ))}
      </View>

      <View className="cu-bar margin-top bg-white solid-bottom">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>镂空按钮
        </View>
      </View>
      <View className="grid col-5 padding-sm">
        {btns.map((btn) => (
          <View className="margin-tb-sm text-center" key={btn.color}>
            <CuButton color={btn.color} type="ghost" round inline>
              {btn.text}
            </CuButton>
          </View>
        ))}
      </View>

      <View className="cu-bar margin-top bg-white solid-bottom">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>块状按钮
        </View>
      </View>
      <View className="padding flex flex-direction">
        <CuButton color="grey" size="large">
          玄灰
        </CuButton>
        <CuButton className="margin-tb-sm" color="red" size="large">
          嫣红
        </CuButton>
      </View>

      <View className="cu-bar margin-top bg-white solid-bottom">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>自定义颜色
        </View>
      </View>
      <View className="padding flex flex-direction">
        <CuButton customColor="#1a2a3c" size="large">
          自定义颜色 - 主要按钮
        </CuButton>

        <CuButton
          className="margin-tb-sm"
          customColor="#1a2a3c"
          type="ghost"
          size="large"
        >
          自定义颜色 - 镂空按钮
        </CuButton>

        <CuButton
          className="margin-tb-sm"
          customColor="linear-gradient(to right, #ec008c, #6739b6)"
          size="large"
        >
          渐变色按钮
        </CuButton>
      </View>

      <View className="cu-bar margin-top bg-white solid-bottom">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>按钮加图标
        </View>
      </View>
      <View className="padding flex flex-direction">
        <CuButton color="orange" type="ghost" size="large" icon="upload">
          图标
        </CuButton>

        <CuButton className="margin-tb-sm" color="blue" size="large" loading>
          加载
        </CuButton>

        <CuButton
          className="margin-tb-sm"
          color="green"
          size="large"
          nativeLoading
        >
          微信加载
        </CuButton>
      </View>

      <View className="cu-bar margin-top bg-white solid-bottom">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>无效按钮
        </View>
      </View>
      <View className="padding flex flex-direction">
        <CuButton color="blue" size="large" disabled>
          无效状态
        </CuButton>
        <CuButton
          className="margin-tb-sm"
          color="blue"
          size="large"
          type="ghost"
          disabled
        >
          无效状态
        </CuButton>
      </View>
    </View>
  );
};

export default Button;
