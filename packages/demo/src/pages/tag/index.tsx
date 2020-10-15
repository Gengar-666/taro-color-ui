import React from "react";
import { View, Text } from "@tarojs/components";
import { CuTag, CuNavigation } from "taro-color-ui";

const tags = [
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
  }
];
const Tag: React.FC = () => {
  return (
    <View>
      <CuNavigation
        color="#fff"
        bgColor="linear-gradient(135deg, #FDD819 10%, #E80505 100%)"
        leftSolt="返回"
      >
        标签
      </CuNavigation>

      <View className="cu-bar bg-white solid-bottom">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>标签形状
        </View>
      </View>
      <View className="padding bg-white">
        <CuTag>默认</CuTag>
        <CuTag round className="margin-left-sm">
          椭圆
        </CuTag>
        <CuTag radius className="margin-left-sm">
          圆角
        </CuTag>
      </View>

      <View className="cu-bar bg-white solid-bottom margin-top">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>标签尺寸
        </View>
      </View>
      <View className="padding bg-white">
        <CuTag radius size="small">
          小尺寸
        </CuTag>
        <CuTag radius className="margin-left-sm">
          普通尺寸
        </CuTag>
      </View>

      <View className="cu-bar margin-top bg-white solid-bottom">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>标签颜色
        </View>
      </View>
      <View className="padding-sm flex flex-wrap">
        {tags.map((tag) => (
          <View className="padding-xs" key={tag.color}>
            <CuTag color={tag.color}>{tag.text}</CuTag>
          </View>
        ))}
      </View>

      <View className="cu-bar margin-top bg-white solid-bottom">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>浅色
        </View>
      </View>
      <View className="padding-sm flex flex-wrap">
        {tags.map((tag) => (
          <View className="padding-xs" key={tag.color}>
            {!["gray", "black"].includes(tag.color) && (
              <CuTag type="light" color={tag.color}>
                {tag.text}
              </CuTag>
            )}
          </View>
        ))}
      </View>

      <View className="cu-bar margin-top bg-white solid-bottom">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>镂空标签
        </View>
      </View>
      <View className="padding-sm flex flex-wrap">
        {tags.map((tag) => (
          <View className="padding-xs" key={tag.color}>
            <CuTag type="ghost" color={tag.color}>
              {tag.text}
            </CuTag>
          </View>
        ))}
      </View>

      <View className="cu-bar margin-top bg-white solid-bottom">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>胶囊样式
        </View>
      </View>
      <View className="padding bg-white">
        <CuTag
          type="capsule"
          capsuleLeft={<Text className="cuIcon-likefill"></Text>}
          color="red"
        >
          12
        </CuTag>
        <CuTag
          type="capsule"
          capsuleLeft={<Text className="cuIcon-likefill"></Text>}
          color="blue"
          round
          onClick={(e) => console.log(e)}
        >
          23
        </CuTag>
        <CuTag type="capsule" capsuleLeft="说明" color="blue" round>
          123
        </CuTag>
        <CuTag
          type="capsule"
          capsuleLeft={<Text className="cuIcon-likefill"></Text>}
          color="grey"
          radius
        >
          23
        </CuTag>
        <CuTag
          type="capsule"
          capsuleLeft={<Text className="cuIcon-likefill"></Text>}
          color="brown"
          radius
          size="small"
        >
          23
        </CuTag>
      </View>
    </View>
  );
};

export default Tag;
