import React, { useState, useEffect, useRef } from "react";
import { View } from "@tarojs/components";
import classnames from "classnames";
import Icon from "./../icon";
export const CuSwitch = ({ prefixCls = "cu-switch", color = "#39b54a", checked = false, showIcon = true, disabled = false, className, onChange }) => {
    const setStateCallback = useRef();
    const [_checked, set_Checked] = useState(checked);
    useEffect(() => {
        if (setStateCallback.current) {
            setStateCallback.current(_checked);
            setStateCallback.current = undefined;
        }
    }, [_checked]);
    /** 切换状态 */
    const switchState = () => {
        if (disabled) {
            return;
        }
        set_Checked(!_checked);
        setStateCallback.current = onChange;
    };
    const wrapCls = classnames(prefixCls, className, {
        checked: _checked,
        disabled
    });
    return (React.createElement(View, { className: wrapCls, style: { backgroundColor: _checked ? color : "#8799a3" } },
        React.createElement(View, { className: "fui-switch", style: {
                justifyContent: _checked ? "flex-start" : "flex-end"
            }, onClick: switchState }, showIcon && (React.createElement(Icon, { value: _checked ? "check" : "close", color: "#fff", size: "12" })))));
};
export default CuSwitch;
//# sourceMappingURL=index.js.map