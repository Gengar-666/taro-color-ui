import React from "react";
import ListItem from "./item";
import { CommonProps } from "../types/common";
interface IProps extends CommonProps {
}
export declare const CuList: React.FC<IProps> & {
    Item: typeof ListItem;
};
export default CuList;
