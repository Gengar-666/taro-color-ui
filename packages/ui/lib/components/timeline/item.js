import React from "react";
import { View } from "@tarojs/components";
import classnames from "classnames";
import { CuIcon } from "./../../index";
const CuTimelineItem = ({ left, color = "#f1f1f1", shadow = false, children }) => {
    return (React.createElement(View, { className: "cu-item" },
        React.createElement(View, { className: "left" }, left ? left : React.createElement(CuIcon, { value: "radioboxfill", size: "15", color: color })),
        children && (React.createElement(View, { className: classnames("content", { "shadow-blur": shadow }), style: { backgroundColor: color } }, children))));
};
export default CuTimelineItem;
//# sourceMappingURL=item.js.map