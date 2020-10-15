import React from "react";
import { CommonProps } from "../types/common";
interface IProps extends CommonProps {
    /**
     * 标题
     */
    title?: string;
    /**
     * 模态框出现的位置
     * @default "center"
     */
    position?: "center" | "bottom";
    /**
     * 是否显示模态框
     */
    isOpened: boolean;
    /**
     * 是否显示显示操作按钮
     * @default true
     */
    showAction?: boolean;
    /**
     * 取消按钮的文本
     * @default "取消"
     */
    cancelText?: string;
    /**
     * 确认按钮的文本
     * @default "确定"
     */
    confirmText?: string;
    /**
     * 取消按钮的文本颜色
     */
    cancelColor?: string;
    /**
     * 确认按钮的文本颜色
     */
    confirmColor?: string;
    /**
     * 点击浮层的时候时候自动关闭
     * @default true
     */
    closeOnClickOverlay?: boolean;
    /**
     * 触发关闭时的事件
     */
    onClose?: () => void;
    /**
     * 点击取消按钮触发的事件
     */
    onCancel?: () => void;
    /**
     * 点击确认按钮触发的事件
     */
    onConfirm?: () => void;
}
export declare const CuModal: React.FC<IProps>;
export default CuModal;
