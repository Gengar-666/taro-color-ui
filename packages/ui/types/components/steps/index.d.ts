import React from "react";
import { CommonProps } from "../types/common";
import Item from "./item";
interface IProps extends CommonProps {
    /**
     * 是否使用箭头代替横线
     */
    arrow?: boolean;
    /**
     * 类型
     */
    type?: "normal" | "number";
    /**
     * 激活态颜色
     */
    activeColor?: string;
    /**
     * 当前步骤索引值
     */
    current?: number;
}
export declare const CuSteps: React.FC<IProps> & {
    Item: typeof Item;
};
export default CuSteps;
