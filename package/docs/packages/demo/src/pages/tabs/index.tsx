import React from "react";
import { View, Text } from "@tarojs/components";
import { CuTabs, CuNavigation, CuIcon } from "taro-color-ui";

const Index: React.FC = () => {
  return (
    <View>
      <CuNavigation
        color="#fff"
        bgColor="linear-gradient(135deg, #92FFC0 10%, #002661 100%)"
        leftSolt="返回"
      >
        标签页
      </CuNavigation>

      <View className="cu-bar bg-white solid-bottom">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>等宽标签栏
        </View>
      </View>
      <CuTabs
        tabs={[
          { title: "tab-1", key: "t1" },
          { title: "tab-2", key: "t2" },
          { title: "tab-3", key: "t3" }
        ]}
        current={0}
        height="50px"
      >
        <View key="t1">标签1-内容</View>
        <View key="t2">标签2-内容</View>
        <View key="t3">标签3-内容</View>
      </CuTabs>

      <View className="cu-bar bg-white solid-bottom">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>居中标签栏
        </View>
      </View>
      <CuTabs
        tabs={[
          { title: "tab-1", key: "t1" },
          { title: "tab-2", key: "t2" },
          { title: "tab-3", key: "t3" }
        ]}
        center
        height="50px"
      >
        <View key="t1">标签1-内容</View>
        <View key="t2">标签2-内容</View>
        <View key="t3">标签3-内容</View>
      </CuTabs>

      <View className="cu-bar bg-white solid-bottom">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>滚动标签栏
        </View>
      </View>
      <CuTabs
        tabs={[
          { title: "tab-1", key: "t1" },
          { title: "tab-2", key: "t2" },
          { title: "tab-3", key: "t3" },
          { title: "tab-4", key: "t4" },
          { title: "tab-5", key: "t5" },
          { title: "tab-6", key: "t6" },
          { title: "tab-7", key: "t7" },
          { title: "tab-8", key: "t8" },
          { title: "tab-9", key: "t9" },
          { title: "tab-10", key: "t10" }
        ]}
        scroll
        height="50px"
      >
        <View key="t1">标签1-内容</View>
        <View key="t2">标签2-内容</View>
        <View key="t3">标签3-内容</View>
        <View key="t4">标签4-内容</View>
        <View key="t5">标签5-内容</View>
        <View key="t6">标签6-内容</View>
        <View key="t7">标签7-内容</View>
        <View key="t8">标签8-内容</View>
        <View key="t9">标签9-内容</View>
        <View key="t10">标签10-内容</View>
      </CuTabs>

      <View className="cu-bar bg-white solid-bottom">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>自定义标题
        </View>
      </View>
      <CuTabs
        tabs={[
          {
            title: (
              <React.Fragment>
                <CuIcon value="emoji"></CuIcon>
              </React.Fragment>
            ),
            key: "t1"
          },
          {
            title: (
              <React.Fragment>
                <CuIcon value="moneybag"></CuIcon>
              </React.Fragment>
            ),
            key: "t2"
          },
          {
            title: (
              <React.Fragment>
                <CuIcon value="github"></CuIcon>
              </React.Fragment>
            ),
            key: "t3"
          }
        ]}
        onChange={(item, index) => console.log(item, index)}
        height="50px"
      >
        <View key="t1">标签1-内容</View>
        <View key="t2">标签2-内容</View>
        <View key="t3">标签3-内容</View>
      </CuTabs>

      <View className="cu-bar bg-white solid-bottom">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>自定义颜色
        </View>
      </View>
      <CuTabs
        tabs={[
          { title: "tab-1", key: "t1" },
          { title: "tab-2", key: "t2" },
          { title: "tab-3", key: "t3" }
        ]}
        height="50px"
        color="#a5673f"
        activeColor="#f37b1d"
      >
        <View key="t1">标签1-内容</View>
        <View key="t2">标签2-内容</View>
        <View key="t3">标签3-内容</View>
      </CuTabs>

      <View className="cu-bar bg-white solid-bottom">
        <View className="action">
          <Text className="cuIcon-title text-blue"></Text>禁止手势滑动切换内容页
        </View>
      </View>
      <CuTabs
        tabs={[
          { title: "tab-1", key: "t1" },
          { title: "tab-2", key: "t2" },
          { title: "tab-3", key: "t3" }
        ]}
        current={0}
        height="50px"
        swipeable={false}
      >
        <View key="t1">标签1-内容</View>
        <View key="t2">标签2-内容</View>
        <View key="t3">标签3-内容</View>
      </CuTabs>
    </View>
  );
};

export default Index;
