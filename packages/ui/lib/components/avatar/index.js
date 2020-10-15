import React from "react";
import { View, Text } from "@tarojs/components";
import classnames from "classnames";
export const CuAvatar = ({ prefixCls = "cu-avatar", size = "normal", className, src, round, radius, text, color, children }) => {
    const wrapCls = classnames((prefixCls = "cu-avatar"), className, {
        [`${prefixCls}__round`]: round,
        [`${prefixCls}__radius`]: radius,
        [`${prefixCls}__${size}`]: size !== "normal",
        [`${prefixCls}__bg-${color}`]: color
    });
    return (React.createElement(View, { className: wrapCls, style: {
            backgroundImage: `url(${src})`
        } }, text ? React.createElement(Text, { className: "text" }, text) : children));
};
CuAvatar.Group = ({ children }) => (React.createElement(View, { className: "cu-avatar-group" }, children));
export default CuAvatar;
//# sourceMappingURL=index.js.map