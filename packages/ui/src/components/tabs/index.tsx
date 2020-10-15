import React from "react";
import { View, ScrollView, Swiper, SwiperItem } from "@tarojs/components";
import classnames from "classnames";
import { CommonProps } from "../types/common";

type TabDada = { title: React.ReactNode; key: string };

interface IProps extends CommonProps {
  /**
   * tab数据
   */
  tabs: TabDada[];
  /**
   * 是否居中显示
   */
  center?: boolean;
  /**
   * 未选中的颜色
   */
  color?: string;
  /**
   * 选中的颜色
   */
  activeColor?: string;
  /**
   * tabBar背景色
   */
  backgroundColor?: string;
  /**
   * 当前选中的标签index
   */
  current?: number;
  /**
   * 是否支持手势滑动切换内容页
   */
  swipeable?: boolean;
  /**
   * 是否开启切换动画
   */
  animated?: boolean;
  /**
   * 是否滚动，当标签太多时建议使用
   */
  scroll?: boolean;
  /**
   * 内容区域高度
   */
  height?: string;
  /**
   * 切换缓动动画类型
   */
  easingFunction?:
    | "default"
    | "linear"
    | "easeInCubic"
    | "easeOutCubic"
    | "easeInOutCubic";
  /**
   * tab的索引发生变化是触发
   */
  onChange?: (tabData: TabDada, index: number) => void;
}

export const CuTabs: React.FC<IProps> = ({
  className,
  center = false,
  color = "#000",
  activeColor = "#0081ff",
  tabs = [],
  current = 0,
  swipeable = true,
  animated = true,
  scroll = false,
  height = "calc(100vh - 45PX)",
  backgroundColor = "#fff",
  easingFunction = "default",
  onChange,
  children
}) => {
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
    const [items, setItems] = React.useState<any[]>([]);
    React.useEffect(() => {
      if (children) {
        if (!Array.isArray(children)) {
          setItems([children]);
        } else {
          let items: any[] = [];
          tabs.map(({ key }) => {
            let item = (children as any[]).find((i) => i.key === key);
            item && items.push(item);
          });
          setItems(items);
        }
      }
    }, []);
    return items;
  };

  const tabItems = getTabItems();

  const tabItemNode = (
    <React.Fragment>
      {tabs.map((item, index) => (
        <View
          className={classnames("cu-item", {
            cur: tabCur === index
          })}
          style={Object.assign(
            {
              color: tabCur === index ? activeColor : color
            },
            !center
              ? {
                  textAlign: "center" as const,
                  flex: 1
                }
              : {}
          )}
          data-id={index}
          onClick={(e) => tabSelect(e.currentTarget.dataset.id)}
        >
          {item.title}
        </View>
      ))}
    </React.Fragment>
  );

  return (
    <View>
      {!scroll && (
        <View
          className={classnames("cu-tabs", className, {
            "text-center": center
          })}
          style={Object.assign(
            { backgroundColor },
            !center ? { display: "flex" } : {}
          )}
        >
          {tabItemNode}
        </View>
      )}

      {scroll && (
        <ScrollView
          scrollX
          className={classnames("cu-scroll-tabs", className, {
            "text-center": center
          })}
          scrollWithAnimation
          scrollLeft={srollLeft}
          style={{ backgroundColor }}
        >
          {tabItemNode}
        </ScrollView>
      )}

      {swipeable && (
        <Swiper
          current={tabCur}
          duration={animated ? 300 : 0}
          easingFunction={easingFunction}
          onChange={(e) => tabSelect(e.detail.current)}
          style={{ height }}
        >
          {tabItems.map((item) => (
            <SwiperItem
              key={item.key}
              className="cu-tabs-pane"
              style={{ height }}
            >
              {item}
            </SwiperItem>
          ))}
        </Swiper>
      )}

      {!swipeable &&
        tabItems.map((item, index) => (
          <React.Fragment key={item.key}>
            {index === tabCur && (
              <View className="cu-tabs-pane" style={{ height }}>
                {item}
              </View>
            )}
          </React.Fragment>
        ))}
    </View>
  );
};

export default CuTabs;
