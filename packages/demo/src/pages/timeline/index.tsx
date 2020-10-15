import React from "react";
import { View, Text } from "@tarojs/components";
import { CuTimeline, CuIcon, CuNavigation, CuTag } from "taro-color-ui";

const Index: React.FC = () => {
  return (
    <View>
      <CuNavigation
        color="#fff"
        bgColor="linear-gradient(135deg, #65FDF0 10%, #1D6FA3 100%)"
        leftSolt="返回"
      >
        时间轴
      </CuNavigation>

      <View className="cu-bar bg-white solid-bottom">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>基础用法
        </View>
      </View>
      <CuTimeline time="昨天">
        <CuTimeline.Item
          shadow
          color="#39b54a"
          left={<CuIcon value="noticefill" size="15" />}
        >
          <View style={{ color: "#fff" }}>
            <Text>23:59</Text> 【火星】快件已到达地球
          </View>
        </CuTimeline.Item>

        <CuTimeline.Item
          shadow
          color="#e54d42"
          left={
            <CuIcon
              value="attentionforbidfill"
              size="15"
              color="#e54d42"
            ></CuIcon>
          }
        >
          <View style={{ color: "#fff" }}>
            <Text>15:00</Text>【地球】快件接收中！
          </View>
        </CuTimeline.Item>

        <CuTimeline.Item color="#0081ff" shadow>
          <View style={{ color: "#fff" }}>
            <Text>20:00</Text> 【北京】快件已到达北京，准备发往上海
          </View>
        </CuTimeline.Item>

        <CuTimeline.Item color="#1cbbb4" shadow>
          <View style={{ color: "#fff" }}>
            <Text>10:00</Text>【天津】快件已到达天津，准备发往上海
          </View>
        </CuTimeline.Item>

        <CuTimeline.Item color="#9c26b0" shadow>
          <View style={{ color: "#fff" }}>
            <Text>10:00</Text>【南京】快件已到达南京，准备发往上海
          </View>
        </CuTimeline.Item>
      </CuTimeline>

      <CuTimeline time="6-06">
        <CuTimeline.Item color="#8799a3" shadow>
          <View style={{ color: "#fff" }}>
            <Text>10:00</Text>【上海】快件已到达上海，准备配送
          </View>
        </CuTimeline.Item>
      </CuTimeline>

      <CuTimeline time="6-08">
        <CuTimeline.Item color="#f1f1f1" shadow>
          <CuTag type="ghost" radius color="blue">
            上午11点
          </CuTag>
          <View className="margin-top-sm text-black">快件已被签收！</View>
        </CuTimeline.Item>
      </CuTimeline>
    </View>
  );
};

export default Index;
