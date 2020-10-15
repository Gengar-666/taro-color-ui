var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import classnames from "classnames";
export const CuSwiper = (_a) => {
    var { className, images = [], dotStyle = "round-dot", type = "screen", onClick } = _a, swiperProps = __rest(_a, ["className", "images", "dotStyle", "type", "onClick"]);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const onChange = ({ detail: { current } }) => {
        var _a;
        (_a = swiperProps.onChange) === null || _a === void 0 ? void 0 : _a.call(swiperProps, current);
        setCurrentIndex(current);
    };
    return (React.createElement(Swiper, Object.assign({ className: classnames("cu-swiper", `${type}-swiper`, dotStyle) }, swiperProps, { onChange: onChange }), images.map((src, index) => (React.createElement(SwiperItem, { className: classnames("cu-swiper-item", {
            cur: index === currentIndex
        }), key: index, onClick: () => {
            onClick && onClick(index);
        } }, type === "card" ? (React.createElement(View, { className: "swiper-item" },
        React.createElement(Image, { src: src, mode: "aspectFill" }))) : (React.createElement(Image, { src: src, mode: "aspectFill" })))))));
};
export default CuSwiper;
//# sourceMappingURL=index.js.map