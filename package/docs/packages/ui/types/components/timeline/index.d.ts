import React from "react";
import { CommonProps } from "../types/common";
import Item from "./item";
interface IProps extends CommonProps {
    /**
     * 时间
     */
    time: string;
}
export declare const CuTimeline: React.FC<IProps> & {
    Item: typeof Item;
};
export default CuTimeline;
