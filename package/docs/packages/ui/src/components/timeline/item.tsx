import React from "react";
import { View } from "@tarojs/components";
import classnames from "classnames";
import { CuIcon } from "./../../index";

interface IProps {
  /**
   * 颜色
   */
  color?: string;
  /**
   * 左侧内容自定义
   */
  left?: React.ReactNode;
  /**
   * 是否显示阴影
   */
  shadow?: boolean;
}

const CuTimelineItem: React.FC<IProps> = ({
  left,
  color = "#f1f1f1",
  shadow = false,
  children
}) => {
  return (
    <View className="cu-item">
      <View className="left">
        {left ? left : <CuIcon value="radioboxfill" size="15" color={color} />}
      </View>
      {children && (
        <View
          className={classnames("content", { "shadow-blur": shadow })}
          style={{ backgroundColor: color }}
        >
          {children}
        </View>
      )}
    </View>
  );
};

export default CuTimelineItem;
