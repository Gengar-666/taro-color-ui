import React from "react";
import { View, Text, Block, Image } from "@tarojs/components";
import classnames from "classnames";
export const CuGrid = ({ className, columnNum = 3, border = true, badgeColor = "#dd514c", data = [], onClick }) => {
    return (React.createElement(View, { className: classnames("grid", `col-${columnNum}`, className, {
            "no-border": !border
        }) }, data.map((item, index) => (React.createElement(View, { className: "cu-item", key: index, onClick: () => {
            onClick && onClick(item, index);
        } },
        React.createElement(View, { className: "icon" },
            typeof item.icon === "string" ? (React.createElement(Image, { className: "img", src: item.icon })) : (item.icon),
            !!item.badge && item.badge > 0 && (React.createElement(View, { className: "cu-tag badge", style: Object.assign({
                    backgroundColor: badgeColor
                }, item.badge === 1
                    ? {
                        width: "16rpx",
                        height: "16rpx",
                        padding: 0
                    }
                    : {}) }, item.badge > 1 && (React.createElement(Block, null, item.badge > 99 ? "99+" : item.badge))))),
        React.createElement(Text, null, item.name))))));
};
export default CuGrid;
//# sourceMappingURL=index.js.map