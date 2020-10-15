import React from "react";
import { Text } from "@tarojs/components";
import { CommonProps } from "../types/common";
import classnames from "classnames";

interface IProps extends CommonProps {
  /**
   * 图标图案
   */
  value: string;
  /**
   * 图标大小
   * @default 24
   */
  size?: string | number;
  /**
   * 图标颜色
   * @default "#888"
   */
  color?: string;
}

export const CuIcon: React.FC<IProps> = ({
  prefixCls = "cuIcon",
  className,
  value,
  size = 24,
  color = "#888"
}) => {
  const wrapCls = classnames(`${prefixCls}-${value}`, className, {
    [`${prefixCls}`]: prefixCls !== "cuIcon"
  });

  const style: React.CSSProperties = {
    color,
    fontSize: size + "px"
  };

  return <Text className={wrapCls} style={style} />;
};

export default CuIcon;
