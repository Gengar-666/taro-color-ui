import React from "react";
import { Text } from "@tarojs/components";
import classnames from "classnames";
export const CuIcon = ({ prefixCls = "cuIcon", className, value, size = 24, color = "#888" }) => {
    const wrapCls = classnames(`${prefixCls}-${value}`, className, {
        [`${prefixCls}`]: prefixCls !== "cuIcon"
    });
    const style = {
        color,
        fontSize: size + "px"
    };
    return React.createElement(Text, { className: wrapCls, style: style });
};
export default CuIcon;
//# sourceMappingURL=index.js.map