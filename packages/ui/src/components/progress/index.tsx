import React from "react";
import { View } from "@tarojs/components";
import { CommonProps } from "../types/common";
import classnames from "classnames";

interface IProps extends CommonProps {
  /**
   * 颜色
   */
  color?: string;
  /**
   * 椭圆
   */
  round?: boolean;
  /**
   * 圆角
   */
  radius?: boolean;
  /**
   * 大小
   */
  size?: "normal" | "small" | "xs";
  /**
   * 是否为条纹进度条
   */
  striped?: boolean;
  /**
   * 值
   */
  value?: string | number;
  /**
   * 是否显示比例
   */
  showProportion?: boolean;
}

export const CuProgress: React.FC<IProps> = ({
  prefixCls = "cu-progress",
  color = "red",
  round = false,
  radius = false,
  size = "normal",
  striped = false,
  showProportion = true,
  value = 0,
  className
}) => {
  const wrapCls = classnames(prefixCls, className, {
    [`${prefixCls}__${size}`]: size !== "normal",
    [`${prefixCls}__round`]: round,
    [`${prefixCls}__radius`]: radius,
    [`${prefixCls}__striped`]: striped
  });

  let proportion;
  if (value <= 1) {
    proportion = +value * 100 + "%";
  } else {
    proportion = "100%";
  }

  return (
    <View className={wrapCls}>
      <View
        className={classnames(`${prefixCls}__bg-${color}`)}
        style={{ width: proportion }}
      >
        {showProportion && proportion}
      </View>
    </View>
  );
};

export default CuProgress;
