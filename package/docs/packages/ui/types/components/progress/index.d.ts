import React from "react";
import { CommonProps } from "../types/common";
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
export declare const CuProgress: React.FC<IProps>;
export default CuProgress;
