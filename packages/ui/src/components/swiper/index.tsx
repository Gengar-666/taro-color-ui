import React from "react";
import { View, Swiper, SwiperItem, Image } from "@tarojs/components";
import { CommonProps } from "./../types/common";
import classnames from "classnames";
import { SwiperProps } from "@tarojs/components/types/Swiper";

interface IProps
  extends CommonProps,
    Pick<
      SwiperProps,
      | "indicatorDots"
      | "circular"
      | "autoplay"
      | "interval"
      | "duration"
      | "indicatorColor"
      | "indicatorActiveColor"
      | "onChange"
    > {
  /**
   * 数据
   * @default []
   */
  images: string[];
  /**
   * 指示点样式类型
   * @default "round-dot"
   */
  dotStyle?: "round-dot" | "square-dot";
  /**
   * 类型
   * @default "screen"
   */
  type?: "screen" | "card";
  /**
   * 点击item时触发
   */
  onClick?: (index) => void;
}

export const CuSwiper: React.FC<IProps> = ({
  className,
  images = [],
  dotStyle = "round-dot",
  type = "screen",
  onClick,
  ...swiperProps
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const onChange = ({ detail: { current } }) => {
    swiperProps.onChange?.(current);
    setCurrentIndex(current);
  };

  return (
    <Swiper
      className={classnames("cu-swiper", `${type}-swiper`, dotStyle)}
      {...swiperProps}
      onChange={onChange}
    >
      {images.map((src, index) => (
        <SwiperItem
          className={classnames("cu-swiper-item", {
            cur: index === currentIndex
          })}
          key={index}
          onClick={() => {
            onClick && onClick(index);
          }}
        >
          {type === "card" ? (
            <View className="swiper-item">
              <Image src={src} mode="aspectFill"></Image>
            </View>
          ) : (
            <Image src={src} mode="aspectFill"></Image>
          )}
        </SwiperItem>
      ))}
    </Swiper>
  );
};

export default CuSwiper;
