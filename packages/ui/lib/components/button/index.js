import React from "react";
import Taro from "@tarojs/taro";
import classnames from "classnames";
import { Button, Text } from "@tarojs/components";
export const CuButton = ({ prefixCls = "cu-btn", size = "normal", type = "primary", round = false, shadow = false, loading = false, nativeLoading = false, disabled = false, inline = false, customStyle = {}, className, formType, openType, lang, icon, color, customColor, onClick, onContact, onGetUserInfo, onGetPhoneNumber, onOpenSetting, sessionFrom, sendMessageTitle, sendMessagePath, sendMessageImg, showMessageCard, appParameter, children }) => {
    const handleClick = (event) => !disabled && onClick && onClick(event);
    const wrapCls = classnames(prefixCls, className, {
        [`${prefixCls}__${size}`]: size !== "normal",
        [`${prefixCls}__bg-${color}`]: color && type === "primary",
        [`${prefixCls}__ghost-bg-${color}`]: color && type === "ghost",
        [`${prefixCls}__inline`]: inline,
        [`${prefixCls}__disabled`]: disabled,
        [`${prefixCls}__loading`]: loading,
        [`${prefixCls}__round`]: round,
        [`${prefixCls}__shadow-${color}`]: shadow && !disabled
    });
    const customColorStyle = () => {
        if (customColor) {
            return type !== "ghost"
                ? {
                    color: "#fff",
                    background: customColor
                }
                : {
                    color: customColor,
                    border: `1rpx solid ${customColor}`,
                    background: "#fff"
                };
        }
        return {};
    };
    const IS_WEB = Taro.getEnv() === Taro.ENV_TYPE.WEB;
    const props = IS_WEB
        ? {
            lang,
            formType
        }
        : {
            lang,
            formType,
            openType,
            disabled,
            loading: nativeLoading,
            sessionFrom,
            sendMessageTitle,
            sendMessagePath,
            sendMessageImg,
            showMessageCard,
            appParameter,
            onContact,
            onGetUserInfo,
            onGetPhoneNumber,
            onOpenSetting
        };
    return (React.createElement(Button, Object.assign({ onClick: handleClick, className: wrapCls }, props, { style: Object.assign(customColorStyle(), customStyle) }),
        icon && React.createElement(Text, { className: `cuIcon-${icon}` }),
        loading && React.createElement(Text, { className: "cuIcon-loading2 cuIconfont-spin" }),
        children));
};
export default CuButton;
//# sourceMappingURL=index.js.map