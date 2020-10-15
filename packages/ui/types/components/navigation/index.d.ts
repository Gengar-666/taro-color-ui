import React from "react";
interface IProps {
    /**
     * 字体颜色
     * @default "#000"
     */
    color?: string;
    /**
     * 背景色
     */
    bgColor?: string;
    /**
     * 是否显示返回箭头
     * @default true
     */
    isBack?: boolean;
    /**
     * 自定义背景图片
     */
    bgImage?: string;
    /**
     * 左侧内容
     */
    leftSolt?: React.ReactNode;
    /**
     * 右侧内容
     */
    rightSolt?: React.ReactNode;
}
export declare const CuNavigation: React.FC<IProps>;
export default CuNavigation;
