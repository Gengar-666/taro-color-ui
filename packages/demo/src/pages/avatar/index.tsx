import React from "react";
import { View, Text } from "@tarojs/components";
import { CuAvatar, CuNavigation } from "taro-color-ui";

const colors = [
  {
    color: "red"
  },
  {
    color: "orange"
  },
  {
    color: "yellow"
  },
  {
    color: "olive"
  },
  {
    color: "green"
  },
  {
    color: "cyan"
  },
  {
    color: "blue"
  },
  {
    color: "purple"
  },
  {
    color: "mauve"
  },
  {
    color: "pink"
  },
  {
    color: "brown"
  },
  {
    color: "grey"
  },
  {
    color: "gray"
  },
  {
    color: "black"
  },
  {
    color: "white"
  }
];

const Index: React.FC = () => {
  return (
    <View>
      <CuNavigation
        color="#fff"
        bgColor="linear-gradient(135deg, #3B2667 10%, #BC78EC 100%)"
        leftSolt="返回"
      >
        头像
      </CuNavigation>

      <View className="cu-bar bg-white solid-bottom">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>头像形状
        </View>
      </View>
      <View className="padding">
        <CuAvatar
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1957580000,2550223445&fm=26&gp=0.jpg"
          round
        ></CuAvatar>
        <CuAvatar
          className="margin-left"
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1957580000,2550223445&fm=26&gp=0.jpg"
          radius
        ></CuAvatar>
      </View>

      <View className="cu-bar bg-white solid-bottom">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>头像尺寸
        </View>
      </View>
      <View className="padding">
        <CuAvatar
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1957580000,2550223445&fm=26&gp=0.jpg"
          round
          size="small"
        ></CuAvatar>
        <CuAvatar
          className="margin-left"
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1957580000,2550223445&fm=26&gp=0.jpg"
          round
        ></CuAvatar>
        <CuAvatar
          className="margin-left"
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1957580000,2550223445&fm=26&gp=0.jpg"
          round
          size="large"
        ></CuAvatar>
        <CuAvatar
          className="margin-left"
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1957580000,2550223445&fm=26&gp=0.jpg"
          round
          size="xl"
        ></CuAvatar>
      </View>
      <View className="padding">
        <CuAvatar round text="A" color="blue" size="small"></CuAvatar>
        <CuAvatar
          className="margin-left"
          round
          text="B"
          color="blue"
        ></CuAvatar>
        <CuAvatar
          className="margin-left"
          round
          text="C"
          color="blue"
          size="large"
        ></CuAvatar>
        <CuAvatar
          className="margin-left"
          round
          text="D"
          color="blue"
          size="xl"
        ></CuAvatar>
      </View>

      <View className="cu-bar bg-white solid-bottom">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>内嵌文字
        </View>
      </View>
      <View className="padding">
        <CuAvatar radius text="文" color="grey"></CuAvatar>
        <CuAvatar
          radius
          className="margin-left"
          text="字"
          color="grey"
        ></CuAvatar>
      </View>

      <View className="cu-bar bg-white solid-bottom">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>头像颜色
        </View>
      </View>
      <View className="padding-sm">
        {colors.map((i) => (
          <CuAvatar
            round
            size="large"
            color={i.color}
            text={i.color}
            className="margin-right-sm margin-bottom-sm"
            key={i.color}
          ></CuAvatar>
        ))}
      </View>

      <View className="cu-bar bg-white solid-bottom">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>头像组
        </View>
      </View>
      <View className="padding">
        <CuAvatar.Group>
          <CuAvatar
            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1957580000,2550223445&fm=26&gp=0.jpg"
            round
            size="large"
          ></CuAvatar>
          <CuAvatar
            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1957580000,2550223445&fm=26&gp=0.jpg"
            round
            size="large"
          ></CuAvatar>
          <CuAvatar
            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1957580000,2550223445&fm=26&gp=0.jpg"
            round
            size="large"
          ></CuAvatar>
          <CuAvatar
            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1957580000,2550223445&fm=26&gp=0.jpg"
            round
            size="large"
          ></CuAvatar>
        </CuAvatar.Group>
      </View>
    </View>
  );
};

export default Index;
