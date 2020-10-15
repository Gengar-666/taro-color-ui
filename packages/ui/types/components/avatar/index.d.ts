import React from "react";
import { CommonProps } from "../types/common";
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
export declare const CuAvatar: React.FC<IProps> & {
    Group: React.FC;
};
export default CuAvatar;
