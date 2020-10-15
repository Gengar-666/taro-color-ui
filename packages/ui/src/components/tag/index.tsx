import React from "react";
import { View } from "@tarojs/components";
import { CommonProps } from "../types/common";
import classnames from "classnames";
import { CommonEvent } from "@tarojs/components/types/common";

interface IProps extends CommonProps {
  /**
   * 类型
   * @default "primary"
   */
  type?: "primary" | "ghost" | "light" | "capsule";
  /**
   * 大小
   * @default "normal"
   */
  size?: "normal" | "small";
  /**
   * 椭圆
   * @default false
   */
  round?: boolean;
  /**
   * 圆角
   * @default false
   */
  radius?: boolean;
  /**
   * 颜色
   */
  color?: string;
  /**
   * 胶囊tag左侧内容
   */
  capsuleLeft?: React.ReactNode;
  /**
   * 点击事件
   */
  onClick?: (envent: CommonEvent) => void;
}

export const CuTag: React.FC<IProps> = ({
  prefixCls = "cu-tag",
  className,
  round = false,
  radius = false,
  size = "normal",
  type = "primary",
  color,
  children,
  capsuleLeft,
  onClick
}) => {
  const wrapCls = classnames(prefixCls, {
    [`${className}`]: type !== "capsule",
    [`${prefixCls}__round`]: round && type !== "capsule",
    [`${prefixCls}__radius`]: radius && type !== "capsule",
    [`${prefixCls}__sm`]: size === "small",
    [`${prefixCls}__bg-${color}`]: color && type === "primary",
    [`${prefixCls}__ghost-bg-${color}`]: color && type === "ghost",
    [`${prefixCls}__light-bg-${color}`]: color && type === "light"
  });

  const capsuleCls =
    type === "capsule"
      ? classnames("cu-capsule", className, {
          "cu-capsule__round": round,
          "cu-capsule__radius": radius
        })
      : "";

  const tag = (
    <View className={wrapCls} onClick={onClick}>
      {children}
    </View>
  );

  const capsuleTag = (
    <View className={capsuleCls} onClick={onClick}>
      <View className={`${wrapCls} ${prefixCls}__bg-${color}`}>
        {capsuleLeft}
      </View>
      <View className={`${wrapCls} ${prefixCls}__ghost-bg-${color}`}>
        {children}
      </View>
    </View>
  );

  return type === "capsule" ? capsuleTag : tag;
};

export default CuTag;
