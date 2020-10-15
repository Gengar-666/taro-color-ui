import React from "react";
import { View } from "@tarojs/components";
import classnames from "classnames";
export const CuProgress = ({ prefixCls = "cu-progress", color = "red", round = false, radius = false, size = "normal", striped = false, showProportion = true, value = 0, className }) => {
    const wrapCls = classnames(prefixCls, className, {
        [`${prefixCls}__${size}`]: size !== "normal",
        [`${prefixCls}__round`]: round,
        [`${prefixCls}__radius`]: radius,
        [`${prefixCls}__striped`]: striped
    });
    let proportion;
    if (value <= 1) {
        proportion = +value * 100 + "%";
    }
    else {
        proportion = "100%";
    }
    return (React.createElement(View, { className: wrapCls },
        React.createElement(View, { className: classnames(`${prefixCls}__bg-${color}`), style: { width: proportion } }, showProportion && proportion)));
};
export default CuProgress;
//# sourceMappingURL=index.js.map