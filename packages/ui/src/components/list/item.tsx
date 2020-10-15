import React from "react";
import { View } from "@tarojs/components";
import classnames from "classnames";

interface IProps {
  /**
   * 标题
   */
  title: React.ReactNode;
  /**
   * 描述
   */
  desc?: React.ReactNode;
  /**
   * 是否显示箭头
   * @default false
   */
  arrow?: boolean;
  /**
   * 动作面板内容
   */
  action?: React.ReactNode;
  /**
   * 滑动动作面板内容
   */
  swipeAction?: React.ReactNode;
  /**
   * 点击时触发
   */
  onClick?: () => void;
}

type TouchInfo = {
  /** 方向 */
  direction: "left" | "right";
  /** 横向起始坐标 */
  startX: number;
};

const ListItem: React.FC<IProps> = ({
  arrow = false,
  title,
  desc,
  action,
  swipeAction,
  onClick
}) => {
  const [touchInfo, setTouchInfo] = React.useState<TouchInfo>({} as TouchInfo);

  const touchStart = (e) => {
    setTouchInfo({ ...touchInfo, startX: e.touches[0].pageX });
  };

  let timer;
  const touchMove = (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const direction =
        e.touches[0].pageX - touchInfo.startX > 0 ? "right" : "left";
      setTouchInfo({ ...touchInfo, direction });
    }, 100);
  };

  return (
    <View
      className={classnames("cu-item", {
        "move-cur": swipeAction && touchInfo.direction === "left",
        arrow
      })}
      onTouchStart={touchStart}
      onTouchMove={touchMove}
      onClick={onClick}
    >
      <View className={classnames("content", { "padding-tb-sm": desc })}>
        <View>
          <View className="text-grey">{title}</View>
        </View>
        {desc && <View className="text-gray text-sm">{desc}</View>}
      </View>
      {action && <View className="action text-gray text-df">{action}</View>}
      {swipeAction && swipeAction && (
        <View className="move">{swipeAction}</View>
      )}
    </View>
  );
};

export default ListItem;
