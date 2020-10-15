import React, { useState, useEffect, useRef } from "react";
import { View } from "@tarojs/components";
import { CommonProps } from "../types/common";
import classnames from "classnames";
import Icon from "./../icon";

interface IProps extends CommonProps {
  /**
   * 背景颜色
   * @default "#39b54a"
   */
  color?: string;
  /**
   * 是否显示开启
   * @default false
   */
  checked?: boolean;
  /**
   * 是否显示icon
   * @default true
   */
  showIcon?: boolean;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 状态改变时触发的事件
   */
  onChange?: (checked: boolean) => void;
}

export const CuSwitch: React.FC<IProps> = ({
  prefixCls = "cu-switch",
  color = "#39b54a",
  checked = false,
  showIcon = true,
  disabled = false,
  className,
  onChange
}) => {
  const setStateCallback = useRef<(checked: boolean) => void>();

  const [_checked, set_Checked] = useState(checked);

  useEffect(() => {
    if (setStateCallback.current) {
      setStateCallback.current(_checked);
      setStateCallback.current = undefined;
    }
  }, [_checked]);

  /** 切换状态 */
  const switchState = () => {
    if (disabled) {
      return;
    }
    set_Checked(!_checked);
    setStateCallback.current = onChange;
  };

  const wrapCls = classnames(prefixCls, className, {
    checked: _checked,
    disabled
  });

  return (
    <View
      className={wrapCls}
      style={{ backgroundColor: _checked ? color : "#8799a3" }}
    >
      <View
        className="fui-switch"
        style={{
          justifyContent: _checked ? "flex-start" : "flex-end"
        }}
        onClick={switchState}
      >
        {showIcon && (
          <Icon
            value={_checked ? "check" : "close"}
            color="#fff"
            size="12"
          ></Icon>
        )}
      </View>
    </View>
  );
};

export default CuSwitch;
