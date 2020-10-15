import React from "react";
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";

interface IProps {
  /**
   * 字体颜色
   * @default "#000"
   */
  color?: string;
  /**
   * 背景色
   */
  bgColor?: string;
  /**
   * 是否显示返回箭头
   * @default true
   */
  isBack?: boolean;
  /**
   * 自定义背景图片
   */
  bgImage?: string;
  /**
   * 左侧内容
   */
  leftSolt?: React.ReactNode;
  /**
   * 右侧内容
   */
  rightSolt?: React.ReactNode;
}

export const CuNavigation: React.FC<IProps> = ({
  color = "#000",
  isBack = true,
  bgColor,
  bgImage,
  children,
  leftSolt,
  rightSolt
}) => {
  const style = React.useMemo(() => {
    let systemInfo = Taro.getSystemInfoSync();
    let ios = !!(systemInfo.system.toLowerCase().search("ios") + 1);
    let rect;
    try {
      rect = Taro.getMenuButtonBoundingClientRect
        ? Taro.getMenuButtonBoundingClientRect()
        : null;
      if (rect === null) {
        throw "getMenuButtonBoundingClientRect error";
      }
      //取值为0的情况  有可能width不为0 top为0的情况
      if (!rect.width || !rect.top || !rect.left || !rect.height) {
        throw "getMenuButtonBoundingClientRect error";
      }
    } catch (error) {
      let gap = 0; //胶囊按钮上下间距 使导航内容居中
      let width = 96; //胶囊的宽度
      if (systemInfo.platform === "android") {
        gap = 8;
        width = 96;
      } else if (systemInfo.platform === "devtools") {
        if (ios) {
          gap = 5.5; //开发工具中ios手机
        } else {
          gap = 7.5; //开发工具中android和其他手机
        }
      } else {
        gap = 4;
        width = 88;
      }
      if (!systemInfo.statusBarHeight) {
        //开启wifi的情况下修复statusBarHeight值获取不到
        systemInfo.statusBarHeight =
          systemInfo.screenHeight - systemInfo.windowHeight - 20;
      }
      rect = {
        //获取不到胶囊信息就自定义重置一个
        bottom: systemInfo.statusBarHeight + gap + 32,
        height: 32,
        left: systemInfo.windowWidth - width - 10,
        right: systemInfo.windowWidth - 10,
        top: systemInfo.statusBarHeight + gap,
        width: width
      };
      console.log("error", error);
      console.log("rect", rect);
    }

    let navBarHeight = "";
    if (!systemInfo.statusBarHeight) {
      systemInfo.statusBarHeight =
        systemInfo.screenHeight - systemInfo.windowHeight - 20;
      navBarHeight = (function () {
        let gap = rect.top - systemInfo.statusBarHeight;
        return 2 * gap + rect.height;
      })();

      systemInfo.statusBarHeight = 0;
      (systemInfo as any).navBarExtendHeight = 0; //下方扩展4像素高度 防止下方边距太小
    } else {
      navBarHeight = (function () {
        let gap = rect.top - systemInfo.statusBarHeight;
        return systemInfo.statusBarHeight + 2 * gap + rect.height;
      })();
      if (ios) {
        (systemInfo as any).navBarExtendHeight = 4; //下方扩展4像素高度 防止下方边距太小
      } else {
        (systemInfo as any).navBarExtendHeight = 0;
      }
    }

    let style: React.CSSProperties = {
      color,
      boxSizing: "border-box",
      height: +navBarHeight + "px",
      paddingTop: systemInfo.statusBarHeight + "px"
    };

    if (bgColor && !bgImage) {
      style.background = bgColor;
    }

    if (bgImage) {
      style.backgroundImage = `url(${bgImage})`;
      style.backgroundSize = "cover";
    }

    return style;
  }, []);

  return (
    <View className="cu-custom" style={{ height: style.height }}>
      <View className="cu-bar fixed" style={style}>
        <View
          className="action"
          onClick={() => (isBack ? Taro.navigateBack({ delta: 1 }) : void 0)}
        >
          {isBack && <Text className="cuIcon-back"></Text>}
          {leftSolt}
        </View>
        <View className="content" style={{ top: style.paddingTop }}>
          {children}
        </View>
        {rightSolt}
      </View>
    </View>
  );
};

export default CuNavigation;
