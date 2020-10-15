import React from "react";
import { View } from "@tarojs/components";
import Item from "./item";
import classnames from "classnames";
export const CuSteps = ({ current = 0, activeColor = "blue", type = "normal", arrow = false, children }) => {
    if (children) {
        children.map((item, index) => {
            item.props.activeColor = activeColor;
            item.props.type = type;
            item.props.index = index;
            if (index <= current) {
                item.props.active = true;
            }
        });
    }
    return (React.createElement(View, { className: classnames("cu-steps", { "steps-arrow": arrow }) }, children));
};
CuSteps.Item = Item;
export default CuSteps;
//# sourceMappingURL=index.js.map