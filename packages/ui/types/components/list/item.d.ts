import React from "react";
interface IProps {
    /**
     * 标题
     */
    title: React.ReactNode;
    /**
     * 描述
     */
    desc?: React.ReactNode;
    /**
     * 是否显示箭头
     * @default false
     */
    arrow?: boolean;
    /**
     * 动作面板内容
     */
    action?: React.ReactNode;
    /**
     * 滑动动作面板内容
     */
    swipeAction?: React.ReactNode;
    /**
     * 点击时触发
     */
    onClick?: () => void;
}
declare const ListItem: React.FC<IProps>;
export default ListItem;
