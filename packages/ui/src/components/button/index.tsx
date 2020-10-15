import React from "react";
import Taro from "@tarojs/taro";
import classnames from "classnames";
import { Button, Text } from "@tarojs/components";
import { ButtonProps } from "@tarojs/components/types/Button";
import { CommonEvent } from "@tarojs/components/types/common";
import { CommonProps } from "../types/common";

interface IProps
  extends CommonProps,
    Pick<
      ButtonProps,
      | "formType"
      | "openType"
      | "lang"
      | "sessionFrom"
      | "sendMessageTitle"
      | "sendMessagePath"
      | "sendMessageImg"
      | "showMessageCard"
      | "appParameter"
      | "onContact"
      | "onGetUserInfo"
      | "onGetPhoneNumber"
      | "onOpenSetting"
      | "onError"
    > {
  /**
   * 按钮的大小
   * @default 'normal'
   */
  size?: "large" | "normal" | "small";
  /**
   * 按钮的类型
   * @default 'primary'
   */
  type?: "primary" | "ghost";
  /**
   * 设置按钮圆角
   * @default false
   */
  round?: boolean;
  /**
   * 设置按钮是否为加载状态
   * @default false
   */
  loading?: boolean;
  /**
   * 设置按钮是否为原生加载状态
   * @default false
   */
  nativeLoading?: boolean;
  /**
   * 设置按钮为禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否设置为行内按钮
   * @default false
   */
  inline?: boolean;
  /**
   * icon
   */
  icon?: string;
  /**
   * 颜色
   */
  color?: string;
  /**
   * 自定义颜色
   */
  customColor?: string;
  /**
   * 自定义样式
   */
  customStyle?: string | React.CSSProperties;
  /**
   * 是否添加阴影
   */
  shadow?: boolean;
  /**
   * 点击按钮时触发
   */
  onClick?: (event: CommonEvent) => void;
}

export const CuButton: React.FC<IProps> = ({
  prefixCls = "cu-btn",
  size = "normal",
  type = "primary",
  round = false,
  shadow = false,
  loading = false,
  nativeLoading = false,
  disabled = false,
  inline = false,
  customStyle = {},
  className,
  formType,
  openType,
  lang,
  icon,
  color,
  customColor,
  onClick,
  onContact,
  onGetUserInfo,
  onGetPhoneNumber,
  onOpenSetting,
  sessionFrom,
  sendMessageTitle,
  sendMessagePath,
  sendMessageImg,
  showMessageCard,
  appParameter,
  children
}) => {
  const handleClick = (event: CommonEvent) =>
    !disabled && onClick && onClick(event);

  const wrapCls = classnames(prefixCls, className, {
    [`${prefixCls}__${size}`]: size !== "normal",
    [`${prefixCls}__bg-${color}`]: color && type === "primary",
    [`${prefixCls}__ghost-bg-${color}`]: color && type === "ghost",
    [`${prefixCls}__inline`]: inline,
    [`${prefixCls}__disabled`]: disabled,
    [`${prefixCls}__loading`]: loading,
    [`${prefixCls}__round`]: round,
    [`${prefixCls}__shadow-${color}`]: shadow && !disabled
  });

  const customColorStyle = () => {
    if (customColor) {
      return type !== "ghost"
        ? {
            color: "#fff",
            background: customColor
          }
        : {
            color: customColor,
            border: `1rpx solid ${customColor}`,
            background: "#fff"
          };
    }
    return {};
  };

  const IS_WEB = Taro.getEnv() === Taro.ENV_TYPE.WEB;

  const props = IS_WEB
    ? {
        lang,
        formType
      }
    : {
        lang,
        formType,
        openType,
        disabled,
        loading: nativeLoading,
        sessionFrom,
        sendMessageTitle,
        sendMessagePath,
        sendMessageImg,
        showMessageCard,
        appParameter,
        onContact,
        onGetUserInfo,
        onGetPhoneNumber,
        onOpenSetting
      };
  return (
    <Button
      onClick={handleClick}
      className={wrapCls}
      {...props}
      style={Object.assign(customColorStyle(), customStyle)}
    >
      {icon && <Text className={`cuIcon-${icon}`} />}
      {loading && <Text className="cuIcon-loading2 cuIconfont-spin" />}
      {children}
    </Button>
  );
};

export default CuButton;
