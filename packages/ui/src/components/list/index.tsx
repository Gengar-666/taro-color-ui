import React from "react";
import { View } from "@tarojs/components";
import ListItem from "./item";
import { CommonProps } from "../types/common";
import classnames from "classnames";

interface IProps extends CommonProps {}

export const CuList: React.FC<IProps> & { Item: typeof ListItem } = ({
  prefixCls = "cu-list",
  className,
  children
}) => {
  const wrapCls = classnames(prefixCls, "menu", className);

  return <View className={wrapCls}>{children}</View>;
};

CuList.Item = ListItem;

export default CuList;
