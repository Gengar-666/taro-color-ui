import React from "react";
import { View, Text } from "@tarojs/components";
import { CuIcon } from "./../../index";
import classnames from "classnames";

interface IProps {
  /**
   * 类型
   */
  type?: "normal" | "number";
  /**
   * 是否激活
   */
  active?: boolean;
  /**
   * 激活态颜色
   */
  activeColor?: string;
  /**
   * 状态
   */
  status?: "wait" | "process" | "finish" | "error";
  /**
   * 标题
   */
  title: string;

  readonly index?: number;
}

const CuTimelineItem: React.FC<IProps> = ({
  type = "normal",
  activeColor = "blue",
  status = "wait",
  active = false,
  index = 0,
  title,
  children
}) => {
  enum ICONS {
    "wait" = "radioboxfill",
    "process" = "usefullfill",
    "finish" = "roundcheckfill",
    "error" = "roundclosefill"
  }

  return (
    <View
      className={classnames("cu-item", {
        [`text-${activeColor}`]: active
      })}
    >
      {type === "normal" ? (
        <CuIcon className="iconfont" value={ICONS[status]} size="20" />
      ) : (
        <Text className={classnames("num", { err: status === "error" })}>
          {index + 1}
        </Text>
      )}
      {title}
      <View className="desc">{children}</View>
    </View>
  );
};

export default CuTimelineItem;
