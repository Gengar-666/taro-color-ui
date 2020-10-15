import React from "react";
import { CommonProps } from "../types/common";
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
export declare const CuIcon: React.FC<IProps>;
export default CuIcon;
