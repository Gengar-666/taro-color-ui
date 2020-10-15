import React from "react";
import { CommonProps } from "../types/common";
declare type TabDada = {
    title: React.ReactNode;
    key: string;
};
interface IProps extends CommonProps {
    /**
     * tab数据
     */
    tabs: TabDada[];
    /**
     * 是否居中显示
     */
    center?: boolean;
    /**
     * 未选中的颜色
     */
    color?: string;
    /**
     * 选中的颜色
     */
    activeColor?: string;
    /**
     * tabBar背景色
     */
    backgroundColor?: string;
    /**
     * 当前选中的标签index
     */
    current?: number;
    /**
     * 是否支持手势滑动切换内容页
     */
    swipeable?: boolean;
    /**
     * 是否开启切换动画
     */
    animated?: boolean;
    /**
     * 是否滚动，当标签太多时建议使用
     */
    scroll?: boolean;
    /**
     * 内容区域高度
     */
    height?: string;
    /**
     * 切换缓动动画类型
     */
    easingFunction?: "default" | "linear" | "easeInCubic" | "easeOutCubic" | "easeInOutCubic";
    /**
     * tab的索引发生变化是触发
     */
    onChange?: (tabData: TabDada, index: number) => void;
}
export declare const CuTabs: React.FC<IProps>;
export default CuTabs;
