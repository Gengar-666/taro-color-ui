import React from "react";
import { View } from "@tarojs/components";
import { CommonProps } from "../types/common";
import classnames from "classnames";

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

export const CuModal: React.FC<IProps> = ({
  position = "center",
  showAction = true,
  cancelText = "取消",
  confirmText = "确定",
  closeOnClickOverlay = true,
  cancelColor,
  confirmColor,
  className,
  title,
  isOpened,
  children,
  onClose,
  onCancel,
  onConfirm
}) => {
  const [_isOpened, setOpened] = React.useState(isOpened);

  React.useEffect(() => {
    setOpened(isOpened);
  }, [isOpened]);

  const close = () => {
    setOpened(!_isOpened);
    onClose && onClose();
  };

  const cancel = (e) => {
    e.stopPropagation();
    onCancel && onCancel();
  };

  const confirm = (e) => {
    e.stopPropagation();
    onConfirm && onConfirm();
  };

  return (
    <View
      onClick={closeOnClickOverlay ? close : void 0}
      className={classnames("cu-modal", className, {
        "bottom-modal": position === "bottom",
        show: _isOpened
      })}
    >
      <View className="cu-dialog">
        {title && position === "center" && (
          <View className="cu-bar justify-end">
            <View className="content">{title}</View>
          </View>
        )}
        {position === "bottom" && showAction && (
          <View className="cu-bar">
            <View
              className="action text-green"
              style={{ color: confirmColor }}
              onClick={confirm}
            >
              {confirmText}
            </View>
            <View
              className="action text-blue"
              style={{ color: cancelColor }}
              onClick={cancel}
            >
              {cancelText}
            </View>
          </View>
        )}
        <View className="padding">{children}</View>
        {position === "center" && showAction && (
          <View className="btns flex">
            <View
              className="flex-sub padding text-red"
              style={{ color: cancelColor }}
              onClick={cancel}
            >
              {cancelText}
            </View>
            <View
              className="flex-sub padding text-green"
              style={{ color: confirmColor }}
              onClick={confirm}
            >
              {confirmText}
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default CuModal;
