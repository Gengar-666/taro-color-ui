import React from "react";
import { CommonProps } from "../types/common";
interface IProps extends CommonProps {
    /**
     * 每一列有多少个
     * @default 3
     */
    columnNum?: 2 | 3 | 4 | 5;
    /**
     * 是否有边框
     * @default true
     */
    border?: boolean;
    /**
     * 徽章颜色
     * @default "#dd514c"
     */
    badgeColor?: string;
    /**
     * 数据
     * @default []
     */
    data: {
        icon: React.ReactNode;
        badge?: number;
        name: string;
    }[];
    /**
     * 点击时触发
     */
    onClick?: (item: any, index: number) => void;
}
export declare const CuGrid: React.FC<IProps>;
export default CuGrid;
