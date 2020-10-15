import React from "react";
import { View, Text, Block, Image } from "@tarojs/components";
import classnames from "classnames";
import { CommonProps } from "../types/common";

interface IProps extends CommonProps {
  /**
   * 每一列有多少个
   * @default 3
   */
  columnNum?: 2 | 3 | 4 | 5;
  /**
   * 是否有边框
   * @default true
   */
  border?: boolean;
  /**
   * 徽章颜色
   * @default "#dd514c"
   */
  badgeColor?: string;
  /**
   * 数据
   * @default []
   */
  data: {
    icon: React.ReactNode;
    badge?: number;
    name: string;
  }[];
  /**
   * 点击时触发
   */
  onClick?: (item, index: number) => void;
}

export const CuGrid: React.FC<IProps> = ({
  className,
  columnNum = 3,
  border = true,
  badgeColor = "#dd514c",
  data = [],
  onClick
}) => {
  return (
    <View
      className={classnames("grid", `col-${columnNum}`, className, {
        "no-border": !border
      })}
    >
      {data.map((item, index) => (
        <View
          className="cu-item"
          key={index}
          onClick={() => {
            onClick && onClick(item, index);
          }}
        >
          <View className="icon">
            {typeof item.icon === "string" ? (
              <Image className="img" src={item.icon}></Image>
            ) : (
              item.icon
            )}
            {!!item.badge && item.badge > 0 && (
              <View
                className="cu-tag badge"
                style={Object.assign(
                  {
                    backgroundColor: badgeColor
                  },
                  item.badge === 1
                    ? {
                        width: "16rpx",
                        height: "16rpx",
                        padding: 0
                      }
                    : {}
                )}
              >
                {item.badge > 1 && (
                  <Block>{item.badge > 99 ? "99+" : item.badge}</Block>
                )}
              </View>
            )}
          </View>
          <Text>{item.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default CuGrid;
