import React from "react";
import { View } from "@tarojs/components";
import classnames from "classnames";
const ListItem = ({ arrow = false, title, desc, action, swipeAction, onClick }) => {
    const [touchInfo, setTouchInfo] = React.useState({});
    const touchStart = (e) => {
        setTouchInfo(Object.assign(Object.assign({}, touchInfo), { startX: e.touches[0].pageX }));
    };
    let timer;
    const touchMove = (e) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            const direction = e.touches[0].pageX - touchInfo.startX > 0 ? "right" : "left";
            setTouchInfo(Object.assign(Object.assign({}, touchInfo), { direction }));
        }, 100);
    };
    return (React.createElement(View, { className: classnames("cu-item", {
            "move-cur": swipeAction && touchInfo.direction === "left",
            arrow
        }), onTouchStart: touchStart, onTouchMove: touchMove, onClick: onClick },
        React.createElement(View, { className: classnames("content", { "padding-tb-sm": desc }) },
            React.createElement(View, null,
                React.createElement(View, { className: "text-grey" }, title)),
            desc && React.createElement(View, { className: "text-gray text-sm" }, desc)),
        action && React.createElement(View, { className: "action text-gray text-df" }, action),
        swipeAction && swipeAction && (React.createElement(View, { className: "move" }, swipeAction))));
};
export default ListItem;
//# sourceMappingURL=item.js.map