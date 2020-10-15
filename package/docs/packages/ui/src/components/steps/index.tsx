import React from "react";
import { View } from "@tarojs/components";
import { CommonProps } from "../types/common";
import Item from "./item";
import classnames from "classnames";

interface IProps extends CommonProps {
  /**
   * 是否使用箭头代替横线
   */
  arrow?: boolean;
  /**
   * 类型
   */
  type?: "normal" | "number";
  /**
   * 激活态颜色
   */
  activeColor?: string;
  /**
   * 当前步骤索引值
   */
  current?: number;
}

export const CuSteps: React.FC<IProps> & { Item: typeof Item } = ({
  current = 0,
  activeColor = "blue",
  type = "normal",
  arrow = false,
  children
}) => {
  if (children) {
    (children as any[]).map((item, index) => {
      item.props.activeColor = activeColor;
      item.props.type = type;
      item.props.index = index;
      if (index <= current) {
        item.props.active = true;
      }
    });
  }

  return (
    <View className={classnames("cu-steps", { "steps-arrow": arrow })}>
      {children}
    </View>
  );
};

CuSteps.Item = Item;

export default CuSteps;
