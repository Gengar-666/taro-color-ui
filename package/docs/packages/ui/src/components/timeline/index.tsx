import React from "react";
import { View } from "@tarojs/components";
import { CommonProps } from "../types/common";
import classnames from "classnames";
import Item from "./item";

interface IProps extends CommonProps {
  /**
   * 时间
   */
  time: string;
}

export const CuTimeline: React.FC<IProps> & { Item: typeof Item } = ({
  prefixCls = "cu-timeline",
  className,
  time,
  children
}) => {
  const wrapCls = classnames(prefixCls, className);

  return (
    <View className={wrapCls}>
      <View className="cu-time">{time}</View>
      {children}
    </View>
  );
};

CuTimeline.Item = Item;

export default CuTimeline;
