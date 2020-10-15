import React from "react";
interface IProps {
    /**
     * 颜色
     */
    color?: string;
    /**
     * 左侧内容自定义
     */
    left?: React.ReactNode;
    /**
     * 是否显示阴影
     */
    shadow?: boolean;
}
declare const CuTimelineItem: React.FC<IProps>;
export default CuTimelineItem;
