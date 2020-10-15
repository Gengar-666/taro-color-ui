import React from "react";
import { ButtonProps } from "@tarojs/components/types/Button";
import { CommonEvent } from "@tarojs/components/types/common";
import { CommonProps } from "../types/common";
interface IProps extends CommonProps, Pick<ButtonProps, "formType" | "openType" | "lang" | "sessionFrom" | "sendMessageTitle" | "sendMessagePath" | "sendMessageImg" | "showMessageCard" | "appParameter" | "onContact" | "onGetUserInfo" | "onGetPhoneNumber" | "onOpenSetting" | "onError"> {
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
export declare const CuButton: React.FC<IProps>;
export default CuButton;
