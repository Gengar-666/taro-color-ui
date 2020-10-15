import React from "react";
import { CommonProps } from "./../types/common";
import { SwiperProps } from "@tarojs/components/types/Swiper";
interface IProps extends CommonProps, Pick<SwiperProps, "indicatorDots" | "circular" | "autoplay" | "interval" | "duration" | "indicatorColor" | "indicatorActiveColor" | "onChange"> {
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
    onClick?: (index: any) => void;
}
export declare const CuSwiper: React.FC<IProps>;
export default CuSwiper;
