import React from "react";
import { CommonProps } from "../types/common";
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
export declare const CuTag: React.FC<IProps>;
export default CuTag;
