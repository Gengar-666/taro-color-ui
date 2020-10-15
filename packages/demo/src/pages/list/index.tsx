import React from "react";
import { View, Text } from "@tarojs/components";
import {
  CuList,
  CuIcon,
  CuButton,
  CuSwitch,
  CuTag,
  CuAvatar,
  CuNavigation
} from "taro-color-ui";

const Index: React.FC = () => {
  return (
    <View>
      <CuNavigation
        color="#fff"
        bgColor="linear-gradient(135deg, #3B2667 10%, #BC78EC 100%)"
        leftSolt="返回"
      >
        列表
      </CuNavigation>

      <CuList>
        <CuList.Item title="无描述无箭头" action="我是action"></CuList.Item>

        <CuList.Item
          title="有描述有箭头"
          desc="我是描述我是描述"
          action="我是action"
          arrow
        ></CuList.Item>

        <CuList.Item
          title={
            <View>
              <CuIcon value="circlefill" color="#0081ff;" size={16}></CuIcon>
              <Text>带icon的标题</Text>
            </View>
          }
          desc={
            <View>
              <CuIcon value="infofill" color="e54d42" size={16}></CuIcon>
              <Text>带icon的描述信息</Text>
            </View>
          }
          action={
            <CuButton color="green" size="small" shadow>
              action
            </CuButton>
          }
          arrow
        ></CuList.Item>

        <CuList.Item
          title="switch"
          action={<CuSwitch></CuSwitch>}
          arrow
        ></CuList.Item>

        <CuList.Item
          title="tag"
          action={
            <View>
              <CuTag radius color="blue" type="ghost">
                tag-1
              </CuTag>
              <CuTag radius color="orange">
                tag-2
              </CuTag>
              <CuTag round color="purple">
                tag-3
              </CuTag>
            </View>
          }
          arrow
        ></CuList.Item>

        <CuList.Item
          title="avatar"
          action={
            <CuAvatar.Group>
              <CuAvatar
                src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1957580000,2550223445&fm=26&gp=0.jpg"
                round
              ></CuAvatar>
              <CuAvatar
                src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1957580000,2550223445&fm=26&gp=0.jpg"
                round
              ></CuAvatar>
              <CuAvatar
                src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1957580000,2550223445&fm=26&gp=0.jpg"
                round
              ></CuAvatar>
              <CuAvatar
                src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1957580000,2550223445&fm=26&gp=0.jpg"
                round
              ></CuAvatar>
            </CuAvatar.Group>
          }
          arrow
        ></CuList.Item>

        <CuList.Item
          title="swipeAction"
          arrow
          swipeAction={
            <React.Fragment>
              <View style={{ color: "#fff", backgroundColor: "#8799a3" }}>
                置顶
              </View>
              <View style={{ color: "#fff", backgroundColor: "#e54d42" }}>
                删除
              </View>
            </React.Fragment>
          }
        ></CuList.Item>
      </CuList>
    </View>
  );
};

export default Index;
