import React from "react";
import { View, Text } from "@tarojs/components";
import { CuIcon } from "./../../index";
import classnames from "classnames";
const CuTimelineItem = ({ type = "normal", activeColor = "blue", status = "wait", active = false, index = 0, title, children }) => {
    let ICONS;
    (function (ICONS) {
        ICONS["wait"] = "radioboxfill";
        ICONS["process"] = "usefullfill";
        ICONS["finish"] = "roundcheckfill";
        ICONS["error"] = "roundclosefill";
    })(ICONS || (ICONS = {}));
    return (React.createElement(View, { className: classnames("cu-item", {
            [`text-${activeColor}`]: active
        }) },
        type === "normal" ? (React.createElement(CuIcon, { className: "iconfont", value: ICONS[status], size: "20" })) : (React.createElement(Text, { className: classnames("num", { err: status === "error" }) }, index + 1)),
        title,
        React.createElement(View, { className: "desc" }, children)));
};
export default CuTimelineItem;
//# sourceMappingURL=item.js.map