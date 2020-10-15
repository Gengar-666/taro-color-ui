import React from "react";
import { View, Text } from "@tarojs/components";
import { CommonProps } from "../types/common";
import classnames from "classnames";

interface IProps extends CommonProps {
  /**
   * 头像地址
   * @default ''
   */
  src?: string;
  /**
   * 是否为圆形头像
   * @default false
   */
  round?: boolean;
  /**
   * 是否为圆角头像
   * @default false
   */
  radius?: boolean;
  /**
   * 大小
   * @default 'normal'
   */
  size?: "small" | "normal" | "large" | "xl";
  /**
   * 文字
   * @default ''
   */
  text?: string;
  /**
   * 颜色
   */
  color?: string;
}

export const CuAvatar: React.FC<IProps> & { Group: React.FC } = ({
  prefixCls = "cu-avatar",
  size = "normal",
  className,
  src,
  round,
  radius,
  text,
  color,
  children
}) => {
  const wrapCls = classnames((prefixCls = "cu-avatar"), className, {
    [`${prefixCls}__round`]: round,
    [`${prefixCls}__radius`]: radius,
    [`${prefixCls}__${size}`]: size !== "normal",
    [`${prefixCls}__bg-${color}`]: color
  });

  return (
    <View
      className={wrapCls}
      style={{
        backgroundImage: `url(${src})`
      }}
    >
      {text ? <Text className="text">{text}</Text> : children}
    </View>
  );
};

CuAvatar.Group = ({ children }) => (
  <View className="cu-avatar-group">{children}</View>
);

export default CuAvatar;
