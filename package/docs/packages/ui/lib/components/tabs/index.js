import React from "react";
import { View, ScrollView, Swiper, SwiperItem } from "@tarojs/components";
import classnames from "classnames";
export const CuTabs = ({ className, center = false, color = "#000", activeColor = "#0081ff", tabs = [], current = 0, swipeable = true, animated = true, scroll = false, height = "calc(100vh - 45PX)", backgroundColor = "#fff", easingFunction = "default", onChange, children }) => {
    const [tabCur, setTabCur] = React.useState(current);
    const [srollLeft, setSrollLeft] = React.useState(0);
    /** 判断是不是第一次渲染组件 */
    const isFirstRender = React.useRef(true);
    React.useEffect(() => {
        setSrollLeft((tabCur - 1) * 60);
        if (onChange && !isFirstRender.current) {
            onChange(tabs[tabCur], tabCur);
        }
        isFirstRender.current = false;
    }, [tabCur]);
    const tabSelect = (idx) => {
        setTabCur(idx);
    };
    const getTabItems = () => {
        const [items, setItems] = React.useState([]);
        React.useEffect(() => {
            if (children) {
                if (!Array.isArray(children)) {
                    setItems([children]);
                }
                else {
                    let items = [];
                    tabs.map(({ key }) => {
                        let item = children.find((i) => i.key === key);
                        item && items.push(item);
                    });
                    setItems(items);
                }
            }
        }, []);
        return items;
    };
    const tabItems = getTabItems();
    const tabItemNode = (React.createElement(React.Fragment, null, tabs.map((item, index) => (React.createElement(View, { className: classnames("cu-item", {
            cur: tabCur === index
        }), style: Object.assign({
            color: tabCur === index ? activeColor : color
        }, !center
            ? {
                textAlign: "center",
                flex: 1
            }
            : {}), "data-id": index, onClick: (e) => tabSelect(e.currentTarget.dataset.id) }, item.title)))));
    return (React.createElement(View, null,
        !scroll && (React.createElement(View, { className: classnames("cu-tabs", className, {
                "text-center": center
            }), style: Object.assign({ backgroundColor }, !center ? { display: "flex" } : {}) }, tabItemNode)),
        scroll && (React.createElement(ScrollView, { scrollX: true, className: classnames("cu-scroll-tabs", className, {
                "text-center": center
            }), scrollWithAnimation: true, scrollLeft: srollLeft, style: { backgroundColor } }, tabItemNode)),
        swipeable && (React.createElement(Swiper, { current: tabCur, duration: animated ? 300 : 0, easingFunction: easingFunction, onChange: (e) => tabSelect(e.detail.current), style: { height } }, tabItems.map((item) => (React.createElement(SwiperItem, { key: item.key, className: "cu-tabs-pane", style: { height } }, item))))),
        !swipeable &&
            tabItems.map((item, index) => (React.createElement(React.Fragment, { key: item.key }, index === tabCur && (React.createElement(View, { className: "cu-tabs-pane", style: { height } }, item)))))));
};
export default CuTabs;
//# sourceMappingURL=index.js.map