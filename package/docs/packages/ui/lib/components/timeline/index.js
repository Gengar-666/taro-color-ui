import React from "react";
import { View } from "@tarojs/components";
import classnames from "classnames";
import Item from "./item";
export const CuTimeline = ({ prefixCls = "cu-timeline", className, time, children }) => {
    const wrapCls = classnames(prefixCls, className);
    return (React.createElement(View, { className: wrapCls },
        React.createElement(View, { className: "cu-time" }, time),
        children));
};
CuTimeline.Item = Item;
export default CuTimeline;
//# sourceMappingURL=index.js.map