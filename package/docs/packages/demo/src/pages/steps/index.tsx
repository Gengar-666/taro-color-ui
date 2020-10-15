import React from "react";
import { View, Text } from "@tarojs/components";
import { CuSteps, CuButton, CuNavigation } from "taro-color-ui";

const Index: React.FC = () => {
  const [current, setCurrent] = React.useState(0);
  const [current2, setCurrent2] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setCurrent(3);
    }, 1000);
  }, []);

  return (
    <View>
      <CuNavigation
        color="#fff"
        bgColor="linear-gradient(135deg, #FFA6B7 10%, #1E2AD2 100%)"
        leftSolt="返回"
      >
        步骤条
      </CuNavigation>

      <View className="cu-bar bg-white">
        <View className="action">
          <Text className="cuIcon-title text-orange "></Text> 基本用法
        </View>
      </View>
      <View className="bg-white padding margin-top-sm">
        <CuSteps current={current}>
          <CuSteps.Item title="进行中" status="process"></CuSteps.Item>
          <CuSteps.Item title="等待" status="wait"></CuSteps.Item>
          <CuSteps.Item title="错误" status="error"></CuSteps.Item>
          <CuSteps.Item title="完成" status="finish"></CuSteps.Item>
        </CuSteps>
      </View>
      <View className="bg-white padding margin-top-sm">
        <CuSteps current={current} activeColor="red">
          <CuSteps.Item title="进行中" status="process"></CuSteps.Item>
          <CuSteps.Item title="等待" status="wait"></CuSteps.Item>
          <CuSteps.Item title="错误" status="error"></CuSteps.Item>
          <CuSteps.Item title="完成" status="finish"></CuSteps.Item>
        </CuSteps>
      </View>

      <View className="cu-bar bg-white margin-top-sm">
        <View className="action">
          <Text className="cuIcon-title text-orange "></Text> 箭头连接
        </View>
      </View>
      <View className="bg-white padding margin-top-sm">
        <CuSteps current={current} activeColor="orange" arrow>
          <CuSteps.Item title="进行中" status="process"></CuSteps.Item>
          <CuSteps.Item title="等待" status="wait"></CuSteps.Item>
          <CuSteps.Item title="错误" status="error"></CuSteps.Item>
          <CuSteps.Item title="完成" status="finish"></CuSteps.Item>
        </CuSteps>
      </View>

      <View className="cu-bar bg-white margin-top-sm">
        <View className="action">
          <Text className="cuIcon-title text-orange"></Text> 数字完成
        </View>
        <View className="action">
          <CuButton
            color="green"
            shadow
            onClick={() => setCurrent2(current2 + 1)}
          >
            下一步
          </CuButton>
        </View>
      </View>
      <View className="bg-white padding margin-top-sm">
        <CuSteps current={current2} activeColor="green" type="number">
          <CuSteps.Item title="进行中" status="process"></CuSteps.Item>
          <CuSteps.Item title="等待" status="wait"></CuSteps.Item>
          <CuSteps.Item title="错误" status="error"></CuSteps.Item>
          <CuSteps.Item title="完成" status="finish"></CuSteps.Item>
        </CuSteps>
      </View>

      <View className="cu-bar bg-white margin-top-sm">
        <View className="action">
          <Text className="cuIcon-title text-orange"></Text> 描述
        </View>
      </View>
      <View className="bg-white padding margin-top-sm">
        <CuSteps current={current} activeColor="green">
          <CuSteps.Item title="进行中">描述1</CuSteps.Item>
          <CuSteps.Item title="等待">描述2</CuSteps.Item>
          <CuSteps.Item title="错误">描述3</CuSteps.Item>
          <CuSteps.Item title="完成">描述4</CuSteps.Item>
        </CuSteps>
      </View>
    </View>
  );
};

export default Index;
