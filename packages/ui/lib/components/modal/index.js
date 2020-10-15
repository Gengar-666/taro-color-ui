import React from "react";
import { View } from "@tarojs/components";
import classnames from "classnames";
export const CuModal = ({ position = "center", showAction = true, cancelText = "取消", confirmText = "确定", closeOnClickOverlay = true, cancelColor, confirmColor, className, title, isOpened, children, onClose, onCancel, onConfirm }) => {
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
    return (React.createElement(View, { onClick: closeOnClickOverlay ? close : void 0, className: classnames("cu-modal", className, {
            "bottom-modal": position === "bottom",
            show: _isOpened
        }) },
        React.createElement(View, { className: "cu-dialog" },
            title && position === "center" && (React.createElement(View, { className: "cu-bar justify-end" },
                React.createElement(View, { className: "content" }, title))),
            position === "bottom" && showAction && (React.createElement(View, { className: "cu-bar" },
                React.createElement(View, { className: "action text-green", style: { color: confirmColor }, onClick: confirm }, confirmText),
                React.createElement(View, { className: "action text-blue", style: { color: cancelColor }, onClick: cancel }, cancelText))),
            React.createElement(View, { className: "padding" }, children),
            position === "center" && showAction && (React.createElement(View, { className: "btns flex" },
                React.createElement(View, { className: "flex-sub padding text-red", style: { color: cancelColor }, onClick: cancel }, cancelText),
                React.createElement(View, { className: "flex-sub padding text-green", style: { color: confirmColor }, onClick: confirm }, confirmText))))));
};
export default CuModal;
//# sourceMappingURL=index.js.map