/// <reference types="react" />
export interface CommonProps {
    /**
     * 样式类名
     */
    className?: string;
    /**
     * 自定义样式
     */
    customStyle?: string | React.CSSProperties;
    /**
     * class前缀
     */
    prefixCls?: string;
}
