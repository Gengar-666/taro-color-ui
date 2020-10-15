import React from "react";
import { View } from "@tarojs/components";
import ListItem from "./item";
import classnames from "classnames";
export const CuList = ({ prefixCls = "cu-list", className, children }) => {
    const wrapCls = classnames(prefixCls, "menu", className);
    return React.createElement(View, { className: wrapCls }, children);
};
CuList.Item = ListItem;
export default CuList;
//# sourceMappingURL=index.js.map