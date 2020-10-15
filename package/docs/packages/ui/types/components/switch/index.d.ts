import React from "react";
import { CommonProps } from "../types/common";
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
export declare const CuSwitch: React.FC<IProps>;
export default CuSwitch;
