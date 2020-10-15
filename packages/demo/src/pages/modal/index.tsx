import React from "react";
import { View, Text, Image } from "@tarojs/components";
import { CuModal, CuButton, CuNavigation, CuIcon } from "taro-color-ui";

const Index: React.FC = () => {
  const [showModal1, setModal1State] = React.useState(false);
  const [showModal2, setModal2State] = React.useState(false);
  const [showModal3, setModal3State] = React.useState(false);
  const [showModal4, setModal4State] = React.useState(false);
  const [showModal5, setModal5State] = React.useState(false);

  return (
    <View>
      <CuNavigation
        color="#fff"
        bgColor="linear-gradient(135deg, #FD6E6A 10%, #FFC600 100%)"
        leftSolt="返回"
      >
        模态框
      </CuNavigation>

      <View className="cu-bar bg-white margin-top">
        <View className="action">
          <Text className="cuIcon-title text-orange "></Text> 基础模态框
        </View>
        <View className="action">
          <CuButton color="green" shadow onClick={() => setModal1State(true)}>
            打开
          </CuButton>
        </View>
      </View>

      <CuModal
        isOpened={showModal1}
        title="提示"
        onClose={() => setModal1State(false)}
        onCancel={() => setModal1State(false)}
        onConfirm={() => setModal1State(false)}
        confirmColor="#0081ff"
      >
        这是基础模态框这是基础模态框这是基础模态框这是基础模态框这是基础模态框这是基础模态框这是基础模态框这是基础模态框这是基础模态框这是基础模态框这是基础模态框这是基础模态框这是基础模态框这是基础模态框这是基础模态框。
      </CuModal>

      <View className="cu-bar bg-white margin-top">
        <View className="action">
          <Text className="cuIcon-title text-orange "></Text> 无标题模态框
        </View>
        <View className="action">
          <CuButton color="green" shadow onClick={() => setModal2State(true)}>
            打开
          </CuButton>
        </View>
      </View>
      <CuModal
        isOpened={showModal2}
        onClose={() => setModal2State(false)}
        onCancel={() => setModal2State(false)}
        onConfirm={() => setModal2State(false)}
        confirmColor="#0081ff"
      >
        无标题模态框
      </CuModal>

      <View className="cu-bar bg-white margin-top">
        <View className="action">
          <Text className="cuIcon-title text-orange "></Text> 无按钮模态框
        </View>
        <View className="action">
          <CuButton color="green" shadow onClick={() => setModal3State(true)}>
            打开
          </CuButton>
        </View>
      </View>
      <CuModal
        showAction={false}
        isOpened={showModal3}
        title="提示"
        onClose={() => setModal3State(false)}
        confirmColor="#0081ff"
      >
        无按钮模态框
      </CuModal>

      <View className="cu-bar bg-white margin-top">
        <View className="action">
          <Text className="cuIcon-title text-orange "></Text> 底部模态框
        </View>
        <View className="action">
          <CuButton color="green" shadow onClick={() => setModal4State(true)}>
            打开
          </CuButton>
        </View>
      </View>
      <CuModal
        position="bottom"
        isOpened={showModal4}
        onClose={() => setModal4State(false)}
        onCancel={() => setModal4State(false)}
        onConfirm={() => setModal4State(false)}
        cancelColor="#e54d42"
        confirmColor="#0081ff"
      >
        底部模态框
      </CuModal>

      <View className="cu-bar bg-white margin-top">
        <View className="action">
          <Text className="cuIcon-title text-orange "></Text> 自定义模态框
        </View>
        <View className="action">
          <CuButton color="green" shadow onClick={() => setModal5State(true)}>
            打开
          </CuButton>
        </View>
      </View>
      <CuModal
        showAction={false}
        isOpened={showModal5}
        onClose={() => setModal5State(false)}
      >
        <View>
          <Image src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1957580000,2550223445&fm=26&gp=0.jpg"></Image>
          <View onClick={() => setModal5State(false)}>
            <CuIcon value="close"></CuIcon>
          </View>
        </View>
      </CuModal>
    </View>
  );
};

export default Index;
