import React from "react";
import { View } from "@tarojs/components";
import classnames from "classnames";
export const CuTag = ({ prefixCls = "cu-tag", className, round = false, radius = false, size = "normal", type = "primary", color, children, capsuleLeft, onClick }) => {
    const wrapCls = classnames(prefixCls, {
        [`${className}`]: type !== "capsule",
        [`${prefixCls}__round`]: round && type !== "capsule",
        [`${prefixCls}__radius`]: radius && type !== "capsule",
        [`${prefixCls}__sm`]: size === "small",
        [`${prefixCls}__bg-${color}`]: color && type === "primary",
        [`${prefixCls}__ghost-bg-${color}`]: color && type === "ghost",
        [`${prefixCls}__light-bg-${color}`]: color && type === "light"
    });
    const capsuleCls = type === "capsule"
        ? classnames("cu-capsule", className, {
            "cu-capsule__round": round,
            "cu-capsule__radius": radius
        })
        : "";
    const tag = (React.createElement(View, { className: wrapCls, onClick: onClick }, children));
    const capsuleTag = (React.createElement(View, { className: capsuleCls, onClick: onClick },
        React.createElement(View, { className: `${wrapCls} ${prefixCls}__bg-${color}` }, capsuleLeft),
        React.createElement(View, { className: `${wrapCls} ${prefixCls}__ghost-bg-${color}` }, children)));
    return type === "capsule" ? capsuleTag : tag;
};
export default CuTag;
//# sourceMappingURL=index.js.map