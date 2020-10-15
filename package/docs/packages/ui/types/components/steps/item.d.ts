import React from "react";
interface IProps {
    /**
     * 类型
     */
    type?: "normal" | "number";
    /**
     * 是否激活
     */
    active?: boolean;
    /**
     * 激活态颜色
     */
    activeColor?: string;
    /**
     * 状态
     */
    status?: "wait" | "process" | "finish" | "error";
    /**
     * 标题
     */
    title: string;
    readonly index?: number;
}
declare const CuTimelineItem: React.FC<IProps>;
export default CuTimelineItem;
