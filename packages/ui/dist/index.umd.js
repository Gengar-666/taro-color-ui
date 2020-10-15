(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('@tarojs/taro'), require('@tarojs/components')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', '@tarojs/taro', '@tarojs/components'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.taroColorUi = {}, global.React, global.Taro, global.components));
}(this, (function (exports, React, Taro, components) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
    var Taro__default = /*#__PURE__*/_interopDefaultLegacy(Taro);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function createCommonjsModule(fn, basedir, module) {
    	return module = {
    	  path: basedir,
    	  exports: {},
    	  require: function (path, base) {
          return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
        }
    	}, fn(module, module.exports), module.exports;
    }

    function commonjsRequire () {
    	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
    }

    var classnames = createCommonjsModule(function (module) {
    /*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
    /* global define */

    (function () {

    	var hasOwn = {}.hasOwnProperty;

    	function classNames () {
    		var classes = [];

    		for (var i = 0; i < arguments.length; i++) {
    			var arg = arguments[i];
    			if (!arg) continue;

    			var argType = typeof arg;

    			if (argType === 'string' || argType === 'number') {
    				classes.push(arg);
    			} else if (Array.isArray(arg) && arg.length) {
    				var inner = classNames.apply(null, arg);
    				if (inner) {
    					classes.push(inner);
    				}
    			} else if (argType === 'object') {
    				for (var key in arg) {
    					if (hasOwn.call(arg, key) && arg[key]) {
    						classes.push(key);
    					}
    				}
    			}
    		}

    		return classes.join(' ');
    	}

    	if ( module.exports) {
    		classNames.default = classNames;
    		module.exports = classNames;
    	} else {
    		window.classNames = classNames;
    	}
    }());
    });

    var CuButton = function (_a) {
        var _b;
        var _c = _a.prefixCls, prefixCls = _c === void 0 ? "cu-btn" : _c, _d = _a.size, size = _d === void 0 ? "normal" : _d, _e = _a.type, type = _e === void 0 ? "primary" : _e, _f = _a.round, round = _f === void 0 ? false : _f, _g = _a.shadow, shadow = _g === void 0 ? false : _g, _h = _a.loading, loading = _h === void 0 ? false : _h, _j = _a.nativeLoading, nativeLoading = _j === void 0 ? false : _j, _k = _a.disabled, disabled = _k === void 0 ? false : _k, _l = _a.inline, inline = _l === void 0 ? false : _l, _m = _a.customStyle, customStyle = _m === void 0 ? {} : _m, className = _a.className, formType = _a.formType, openType = _a.openType, lang = _a.lang, icon = _a.icon, color = _a.color, customColor = _a.customColor, onClick = _a.onClick, onContact = _a.onContact, onGetUserInfo = _a.onGetUserInfo, onGetPhoneNumber = _a.onGetPhoneNumber, onOpenSetting = _a.onOpenSetting, sessionFrom = _a.sessionFrom, sendMessageTitle = _a.sendMessageTitle, sendMessagePath = _a.sendMessagePath, sendMessageImg = _a.sendMessageImg, showMessageCard = _a.showMessageCard, appParameter = _a.appParameter, children = _a.children;
        var handleClick = function (event) {
            return !disabled && onClick && onClick(event);
        };
        var wrapCls = classnames(prefixCls, className, (_b = {},
            _b[prefixCls + "__" + size] = size !== "normal",
            _b[prefixCls + "__bg-" + color] = color && type === "primary",
            _b[prefixCls + "__ghost-bg-" + color] = color && type === "ghost",
            _b[prefixCls + "__inline"] = inline,
            _b[prefixCls + "__disabled"] = disabled,
            _b[prefixCls + "__loading"] = loading,
            _b[prefixCls + "__round"] = round,
            _b[prefixCls + "__shadow-" + color] = shadow && !disabled,
            _b));
        var customColorStyle = function () {
            if (customColor) {
                return type !== "ghost"
                    ? {
                        color: "#fff",
                        background: customColor
                    }
                    : {
                        color: customColor,
                        border: "1rpx solid " + customColor,
                        background: "#fff"
                    };
            }
            return {};
        };
        var IS_WEB = Taro__default['default'].getEnv() === Taro__default['default'].ENV_TYPE.WEB;
        var props = IS_WEB
            ? {
                lang: lang,
                formType: formType
            }
            : {
                lang: lang,
                formType: formType,
                openType: openType,
                disabled: disabled,
                loading: nativeLoading,
                sessionFrom: sessionFrom,
                sendMessageTitle: sendMessageTitle,
                sendMessagePath: sendMessagePath,
                sendMessageImg: sendMessageImg,
                showMessageCard: showMessageCard,
                appParameter: appParameter,
                onContact: onContact,
                onGetUserInfo: onGetUserInfo,
                onGetPhoneNumber: onGetPhoneNumber,
                onOpenSetting: onOpenSetting
            };
        return (React__default['default'].createElement(components.Button, __assign({ onClick: handleClick, className: wrapCls }, props, { style: Object.assign(customColorStyle(), customStyle) }),
            icon && React__default['default'].createElement(components.Text, { className: "cuIcon-" + icon }),
            loading && React__default['default'].createElement(components.Text, { className: "cuIcon-loading2 cuIconfont-spin" }),
            children));
    };

    var ListItem = function (_a) {
        var _b = _a.arrow, arrow = _b === void 0 ? false : _b, title = _a.title, desc = _a.desc, action = _a.action, swipeAction = _a.swipeAction, onClick = _a.onClick;
        var _c = __read(React__default['default'].useState({}), 2), touchInfo = _c[0], setTouchInfo = _c[1];
        var touchStart = function (e) {
            setTouchInfo(__assign(__assign({}, touchInfo), { startX: e.touches[0].pageX }));
        };
        var timer;
        var touchMove = function (e) {
            clearTimeout(timer);
            timer = setTimeout(function () {
                var direction = e.touches[0].pageX - touchInfo.startX > 0 ? "right" : "left";
                setTouchInfo(__assign(__assign({}, touchInfo), { direction: direction }));
            }, 100);
        };
        return (React__default['default'].createElement(components.View, { className: classnames("cu-item", {
                "move-cur": swipeAction && touchInfo.direction === "left",
                arrow: arrow
            }), onTouchStart: touchStart, onTouchMove: touchMove, onClick: onClick },
            React__default['default'].createElement(components.View, { className: classnames("content", { "padding-tb-sm": desc }) },
                React__default['default'].createElement(components.View, null,
                    React__default['default'].createElement(components.View, { className: "text-grey" }, title)),
                desc && React__default['default'].createElement(components.View, { className: "text-gray text-sm" }, desc)),
            action && React__default['default'].createElement(components.View, { className: "action text-gray text-df" }, action),
            swipeAction && swipeAction && (React__default['default'].createElement(components.View, { className: "move" }, swipeAction))));
    };

    var CuList = function (_a) {
        var _b = _a.prefixCls, prefixCls = _b === void 0 ? "cu-list" : _b, className = _a.className, children = _a.children;
        var wrapCls = classnames(prefixCls, "menu", className);
        return React__default['default'].createElement(components.View, { className: wrapCls }, children);
    };
    CuList.Item = ListItem;

    var CuIcon = function (_a) {
        var _b;
        var _c = _a.prefixCls, prefixCls = _c === void 0 ? "cuIcon" : _c, className = _a.className, value = _a.value, _d = _a.size, size = _d === void 0 ? 24 : _d, _e = _a.color, color = _e === void 0 ? "#888" : _e;
        var wrapCls = classnames(prefixCls + "-" + value, className, (_b = {},
            _b["" + prefixCls] = prefixCls !== "cuIcon",
            _b));
        var style = {
            color: color,
            fontSize: size + "px"
        };
        return React__default['default'].createElement(components.Text, { className: wrapCls, style: style });
    };

    var CuTag = function (_a) {
        var _b;
        var _c = _a.prefixCls, prefixCls = _c === void 0 ? "cu-tag" : _c, className = _a.className, _d = _a.round, round = _d === void 0 ? false : _d, _e = _a.radius, radius = _e === void 0 ? false : _e, _f = _a.size, size = _f === void 0 ? "normal" : _f, _g = _a.type, type = _g === void 0 ? "primary" : _g, color = _a.color, children = _a.children, capsuleLeft = _a.capsuleLeft, onClick = _a.onClick;
        var wrapCls = classnames(prefixCls, (_b = {},
            _b["" + className] = type !== "capsule",
            _b[prefixCls + "__round"] = round && type !== "capsule",
            _b[prefixCls + "__radius"] = radius && type !== "capsule",
            _b[prefixCls + "__sm"] = size === "small",
            _b[prefixCls + "__bg-" + color] = color && type === "primary",
            _b[prefixCls + "__ghost-bg-" + color] = color && type === "ghost",
            _b[prefixCls + "__light-bg-" + color] = color && type === "light",
            _b));
        var capsuleCls = type === "capsule"
            ? classnames("cu-capsule", className, {
                "cu-capsule__round": round,
                "cu-capsule__radius": radius
            })
            : "";
        var tag = (React__default['default'].createElement(components.View, { className: wrapCls, onClick: onClick }, children));
        var capsuleTag = (React__default['default'].createElement(components.View, { className: capsuleCls, onClick: onClick },
            React__default['default'].createElement(components.View, { className: wrapCls + " " + prefixCls + "__bg-" + color }, capsuleLeft),
            React__default['default'].createElement(components.View, { className: wrapCls + " " + prefixCls + "__ghost-bg-" + color }, children)));
        return type === "capsule" ? capsuleTag : tag;
    };

    var CuAvatar = function (_a) {
        var _b;
        var _c = _a.prefixCls, prefixCls = _c === void 0 ? "cu-avatar" : _c, _d = _a.size, size = _d === void 0 ? "normal" : _d, className = _a.className, src = _a.src, round = _a.round, radius = _a.radius, text = _a.text, color = _a.color, children = _a.children;
        var wrapCls = classnames((prefixCls = "cu-avatar"), className, (_b = {},
            _b[prefixCls + "__round"] = round,
            _b[prefixCls + "__radius"] = radius,
            _b[prefixCls + "__" + size] = size !== "normal",
            _b[prefixCls + "__bg-" + color] = color,
            _b));
        return (React__default['default'].createElement(components.View, { className: wrapCls, style: {
                backgroundImage: "url(" + src + ")"
            } }, text ? React__default['default'].createElement(components.Text, { className: "text" }, text) : children));
    };
    CuAvatar.Group = function (_a) {
        var children = _a.children;
        return (React__default['default'].createElement(components.View, { className: "cu-avatar-group" }, children));
    };

    var CuProgress = function (_a) {
        var _b;
        var _c = _a.prefixCls, prefixCls = _c === void 0 ? "cu-progress" : _c, _d = _a.color, color = _d === void 0 ? "red" : _d, _e = _a.round, round = _e === void 0 ? false : _e, _f = _a.radius, radius = _f === void 0 ? false : _f, _g = _a.size, size = _g === void 0 ? "normal" : _g, _h = _a.striped, striped = _h === void 0 ? false : _h, _j = _a.showProportion, showProportion = _j === void 0 ? true : _j, _k = _a.value, value = _k === void 0 ? 0 : _k, className = _a.className;
        var wrapCls = classnames(prefixCls, className, (_b = {},
            _b[prefixCls + "__" + size] = size !== "normal",
            _b[prefixCls + "__round"] = round,
            _b[prefixCls + "__radius"] = radius,
            _b[prefixCls + "__striped"] = striped,
            _b));
        var proportion;
        if (value <= 1) {
            proportion = +value * 100 + "%";
        }
        else {
            proportion = "100%";
        }
        return (React__default['default'].createElement(components.View, { className: wrapCls },
            React__default['default'].createElement(components.View, { className: classnames(prefixCls + "__bg-" + color), style: { width: proportion } }, showProportion && proportion)));
    };

    var CuSwitch = function (_a) {
        var _b = _a.prefixCls, prefixCls = _b === void 0 ? "cu-switch" : _b, _c = _a.color, color = _c === void 0 ? "#39b54a" : _c, _d = _a.checked, checked = _d === void 0 ? false : _d, _e = _a.showIcon, showIcon = _e === void 0 ? true : _e, _f = _a.disabled, disabled = _f === void 0 ? false : _f, className = _a.className, onChange = _a.onChange;
        var setStateCallback = React.useRef();
        var _g = __read(React.useState(checked), 2), _checked = _g[0], set_Checked = _g[1];
        React.useEffect(function () {
            if (setStateCallback.current) {
                setStateCallback.current(_checked);
                setStateCallback.current = undefined;
            }
        }, [_checked]);
        /** 切换状态 */
        var switchState = function () {
            if (disabled) {
                return;
            }
            set_Checked(!_checked);
            setStateCallback.current = onChange;
        };
        var wrapCls = classnames(prefixCls, className, {
            checked: _checked,
            disabled: disabled
        });
        return (React__default['default'].createElement(components.View, { className: wrapCls, style: { backgroundColor: _checked ? color : "#8799a3" } },
            React__default['default'].createElement(components.View, { className: "fui-switch", style: {
                    justifyContent: _checked ? "flex-start" : "flex-end"
                }, onClick: switchState }, showIcon && (React__default['default'].createElement(CuIcon, { value: _checked ? "check" : "close", color: "#fff", size: "12" })))));
    };

    var CuTimelineItem = function (_a) {
        var left = _a.left, _b = _a.color, color = _b === void 0 ? "#f1f1f1" : _b, _c = _a.shadow, shadow = _c === void 0 ? false : _c, children = _a.children;
        return (React__default['default'].createElement(components.View, { className: "cu-item" },
            React__default['default'].createElement(components.View, { className: "left" }, left ? left : React__default['default'].createElement(CuIcon, { value: "radioboxfill", size: "15", color: color })),
            children && (React__default['default'].createElement(components.View, { className: classnames("content", { "shadow-blur": shadow }), style: { backgroundColor: color } }, children))));
    };

    var CuTimeline = function (_a) {
        var _b = _a.prefixCls, prefixCls = _b === void 0 ? "cu-timeline" : _b, className = _a.className, time = _a.time, children = _a.children;
        var wrapCls = classnames(prefixCls, className);
        return (React__default['default'].createElement(components.View, { className: wrapCls },
            React__default['default'].createElement(components.View, { className: "cu-time" }, time),
            children));
    };
    CuTimeline.Item = CuTimelineItem;

    var CuTimelineItem$1 = function (_a) {
        var _b;
        var _c = _a.type, type = _c === void 0 ? "normal" : _c, _d = _a.activeColor, activeColor = _d === void 0 ? "blue" : _d, _e = _a.status, status = _e === void 0 ? "wait" : _e, _f = _a.active, active = _f === void 0 ? false : _f, _g = _a.index, index = _g === void 0 ? 0 : _g, title = _a.title, children = _a.children;
        var ICONS;
        (function (ICONS) {
            ICONS["wait"] = "radioboxfill";
            ICONS["process"] = "usefullfill";
            ICONS["finish"] = "roundcheckfill";
            ICONS["error"] = "roundclosefill";
        })(ICONS || (ICONS = {}));
        return (React__default['default'].createElement(components.View, { className: classnames("cu-item", (_b = {},
                _b["text-" + activeColor] = active,
                _b)) },
            type === "normal" ? (React__default['default'].createElement(CuIcon, { className: "iconfont", value: ICONS[status], size: "20" })) : (React__default['default'].createElement(components.Text, { className: classnames("num", { err: status === "error" }) }, index + 1)),
            title,
            React__default['default'].createElement(components.View, { className: "desc" }, children)));
    };

    var CuSteps = function (_a) {
        var _b = _a.current, current = _b === void 0 ? 0 : _b, _c = _a.activeColor, activeColor = _c === void 0 ? "blue" : _c, _d = _a.type, type = _d === void 0 ? "normal" : _d, _e = _a.arrow, arrow = _e === void 0 ? false : _e, children = _a.children;
        if (children) {
            children.map(function (item, index) {
                item.props.activeColor = activeColor;
                item.props.type = type;
                item.props.index = index;
                if (index <= current) {
                    item.props.active = true;
                }
            });
        }
        return (React__default['default'].createElement(components.View, { className: classnames("cu-steps", { "steps-arrow": arrow }) }, children));
    };
    CuSteps.Item = CuTimelineItem$1;

    var CuModal = function (_a) {
        var _b = _a.position, position = _b === void 0 ? "center" : _b, _c = _a.showAction, showAction = _c === void 0 ? true : _c, _d = _a.cancelText, cancelText = _d === void 0 ? "取消" : _d, _e = _a.confirmText, confirmText = _e === void 0 ? "确定" : _e, _f = _a.closeOnClickOverlay, closeOnClickOverlay = _f === void 0 ? true : _f, cancelColor = _a.cancelColor, confirmColor = _a.confirmColor, className = _a.className, title = _a.title, isOpened = _a.isOpened, children = _a.children, onClose = _a.onClose, onCancel = _a.onCancel, onConfirm = _a.onConfirm;
        var _g = __read(React__default['default'].useState(isOpened), 2), _isOpened = _g[0], setOpened = _g[1];
        React__default['default'].useEffect(function () {
            setOpened(isOpened);
        }, [isOpened]);
        var close = function () {
            setOpened(!_isOpened);
            onClose && onClose();
        };
        var cancel = function (e) {
            e.stopPropagation();
            onCancel && onCancel();
        };
        var confirm = function (e) {
            e.stopPropagation();
            onConfirm && onConfirm();
        };
        return (React__default['default'].createElement(components.View, { onClick: closeOnClickOverlay ? close : void 0, className: classnames("cu-modal", className, {
                "bottom-modal": position === "bottom",
                show: _isOpened
            }) },
            React__default['default'].createElement(components.View, { className: "cu-dialog" },
                title && position === "center" && (React__default['default'].createElement(components.View, { className: "cu-bar justify-end" },
                    React__default['default'].createElement(components.View, { className: "content" }, title))),
                position === "bottom" && showAction && (React__default['default'].createElement(components.View, { className: "cu-bar" },
                    React__default['default'].createElement(components.View, { className: "action text-green", style: { color: confirmColor }, onClick: confirm }, confirmText),
                    React__default['default'].createElement(components.View, { className: "action text-blue", style: { color: cancelColor }, onClick: cancel }, cancelText))),
                React__default['default'].createElement(components.View, { className: "padding" }, children),
                position === "center" && showAction && (React__default['default'].createElement(components.View, { className: "btns flex" },
                    React__default['default'].createElement(components.View, { className: "flex-sub padding text-red", style: { color: cancelColor }, onClick: cancel }, cancelText),
                    React__default['default'].createElement(components.View, { className: "flex-sub padding text-green", style: { color: confirmColor }, onClick: confirm }, confirmText))))));
    };

    var CuGrid = function (_a) {
        var className = _a.className, _b = _a.columnNum, columnNum = _b === void 0 ? 3 : _b, _c = _a.border, border = _c === void 0 ? true : _c, _d = _a.badgeColor, badgeColor = _d === void 0 ? "#dd514c" : _d, _e = _a.data, data = _e === void 0 ? [] : _e, onClick = _a.onClick;
        return (React__default['default'].createElement(components.View, { className: classnames("grid", "col-" + columnNum, className, {
                "no-border": !border
            }) }, data.map(function (item, index) { return (React__default['default'].createElement(components.View, { className: "cu-item", key: index, onClick: function () {
                onClick && onClick(item, index);
            } },
            React__default['default'].createElement(components.View, { className: "icon" },
                typeof item.icon === "string" ? (React__default['default'].createElement(components.Image, { className: "img", src: item.icon })) : (item.icon),
                !!item.badge && item.badge > 0 && (React__default['default'].createElement(components.View, { className: "cu-tag badge", style: Object.assign({
                        backgroundColor: badgeColor
                    }, item.badge === 1
                        ? {
                            width: "16rpx",
                            height: "16rpx",
                            padding: 0
                        }
                        : {}) }, item.badge > 1 && (React__default['default'].createElement(components.Block, null, item.badge > 99 ? "99+" : item.badge))))),
            React__default['default'].createElement(components.Text, null, item.name))); })));
    };

    var CuSwiper = function (_a) {
        var className = _a.className, _b = _a.images, images = _b === void 0 ? [] : _b, _c = _a.dotStyle, dotStyle = _c === void 0 ? "round-dot" : _c, _d = _a.type, type = _d === void 0 ? "screen" : _d, onClick = _a.onClick, swiperProps = __rest(_a, ["className", "images", "dotStyle", "type", "onClick"]);
        var _e = __read(React__default['default'].useState(0), 2), currentIndex = _e[0], setCurrentIndex = _e[1];
        var onChange = function (_a) {
            var _b;
            var current = _a.detail.current;
            (_b = swiperProps.onChange) === null || _b === void 0 ? void 0 : _b.call(swiperProps, current);
            setCurrentIndex(current);
        };
        return (React__default['default'].createElement(components.Swiper, __assign({ className: classnames("cu-swiper", type + "-swiper", dotStyle) }, swiperProps, { onChange: onChange }), images.map(function (src, index) { return (React__default['default'].createElement(components.SwiperItem, { className: classnames("cu-swiper-item", {
                cur: index === currentIndex
            }), key: index, onClick: function () {
                onClick && onClick(index);
            } }, type === "card" ? (React__default['default'].createElement(components.View, { className: "swiper-item" },
            React__default['default'].createElement(components.Image, { src: src, mode: "aspectFill" }))) : (React__default['default'].createElement(components.Image, { src: src, mode: "aspectFill" })))); })));
    };

    var CuTabs = function (_a) {
        var className = _a.className, _b = _a.center, center = _b === void 0 ? false : _b, _c = _a.color, color = _c === void 0 ? "#000" : _c, _d = _a.activeColor, activeColor = _d === void 0 ? "#0081ff" : _d, _e = _a.tabs, tabs = _e === void 0 ? [] : _e, _f = _a.current, current = _f === void 0 ? 0 : _f, _g = _a.swipeable, swipeable = _g === void 0 ? true : _g, _h = _a.animated, animated = _h === void 0 ? true : _h, _j = _a.scroll, scroll = _j === void 0 ? false : _j, _k = _a.height, height = _k === void 0 ? "calc(100vh - 45PX)" : _k, _l = _a.backgroundColor, backgroundColor = _l === void 0 ? "#fff" : _l, _m = _a.easingFunction, easingFunction = _m === void 0 ? "default" : _m, onChange = _a.onChange, children = _a.children;
        var _o = __read(React__default['default'].useState(current), 2), tabCur = _o[0], setTabCur = _o[1];
        var _p = __read(React__default['default'].useState(0), 2), srollLeft = _p[0], setSrollLeft = _p[1];
        /** 判断是不是第一次渲染组件 */
        var isFirstRender = React__default['default'].useRef(true);
        React__default['default'].useEffect(function () {
            setSrollLeft((tabCur - 1) * 60);
            if (onChange && !isFirstRender.current) {
                onChange(tabs[tabCur], tabCur);
            }
            isFirstRender.current = false;
        }, [tabCur]);
        var tabSelect = function (idx) {
            setTabCur(idx);
        };
        var getTabItems = function () {
            var _a = __read(React__default['default'].useState([]), 2), items = _a[0], setItems = _a[1];
            React__default['default'].useEffect(function () {
                if (children) {
                    if (!Array.isArray(children)) {
                        setItems([children]);
                    }
                    else {
                        var items_1 = [];
                        tabs.map(function (_a) {
                            var key = _a.key;
                            var item = children.find(function (i) { return i.key === key; });
                            item && items_1.push(item);
                        });
                        setItems(items_1);
                    }
                }
            }, []);
            return items;
        };
        var tabItems = getTabItems();
        var tabItemNode = (React__default['default'].createElement(React__default['default'].Fragment, null, tabs.map(function (item, index) { return (React__default['default'].createElement(components.View, { className: classnames("cu-item", {
                cur: tabCur === index
            }), style: Object.assign({
                color: tabCur === index ? activeColor : color
            }, !center
                ? {
                    textAlign: "center",
                    flex: 1
                }
                : {}), "data-id": index, onClick: function (e) { return tabSelect(e.currentTarget.dataset.id); } }, item.title)); })));
        return (React__default['default'].createElement(components.View, null,
            !scroll && (React__default['default'].createElement(components.View, { className: classnames("cu-tabs", className, {
                    "text-center": center
                }), style: Object.assign({ backgroundColor: backgroundColor }, !center ? { display: "flex" } : {}) }, tabItemNode)),
            scroll && (React__default['default'].createElement(components.ScrollView, { scrollX: true, className: classnames("cu-scroll-tabs", className, {
                    "text-center": center
                }), scrollWithAnimation: true, scrollLeft: srollLeft, style: { backgroundColor: backgroundColor } }, tabItemNode)),
            swipeable && (React__default['default'].createElement(components.Swiper, { current: tabCur, duration: animated ? 300 : 0, easingFunction: easingFunction, onChange: function (e) { return tabSelect(e.detail.current); }, style: { height: height } }, tabItems.map(function (item) { return (React__default['default'].createElement(components.SwiperItem, { key: item.key, className: "cu-tabs-pane", style: { height: height } }, item)); }))),
            !swipeable &&
                tabItems.map(function (item, index) { return (React__default['default'].createElement(React__default['default'].Fragment, { key: item.key }, index === tabCur && (React__default['default'].createElement(components.View, { className: "cu-tabs-pane", style: { height: height } }, item)))); })));
    };

    var CuNavigation = function (_a) {
        var _b = _a.color, color = _b === void 0 ? "#000" : _b, _c = _a.isBack, isBack = _c === void 0 ? true : _c, bgColor = _a.bgColor, bgImage = _a.bgImage, children = _a.children, leftSolt = _a.leftSolt, rightSolt = _a.rightSolt;
        var style = React__default['default'].useMemo(function () {
            var systemInfo = Taro__default['default'].getSystemInfoSync();
            var ios = !!(systemInfo.system.toLowerCase().search("ios") + 1);
            var rect;
            try {
                rect = Taro__default['default'].getMenuButtonBoundingClientRect
                    ? Taro__default['default'].getMenuButtonBoundingClientRect()
                    : null;
                if (rect === null) {
                    throw "getMenuButtonBoundingClientRect error";
                }
                //取值为0的情况  有可能width不为0 top为0的情况
                if (!rect.width || !rect.top || !rect.left || !rect.height) {
                    throw "getMenuButtonBoundingClientRect error";
                }
            }
            catch (error) {
                var gap = 0; //胶囊按钮上下间距 使导航内容居中
                var width = 96; //胶囊的宽度
                if (systemInfo.platform === "android") {
                    gap = 8;
                    width = 96;
                }
                else if (systemInfo.platform === "devtools") {
                    if (ios) {
                        gap = 5.5; //开发工具中ios手机
                    }
                    else {
                        gap = 7.5; //开发工具中android和其他手机
                    }
                }
                else {
                    gap = 4;
                    width = 88;
                }
                if (!systemInfo.statusBarHeight) {
                    //开启wifi的情况下修复statusBarHeight值获取不到
                    systemInfo.statusBarHeight =
                        systemInfo.screenHeight - systemInfo.windowHeight - 20;
                }
                rect = {
                    //获取不到胶囊信息就自定义重置一个
                    bottom: systemInfo.statusBarHeight + gap + 32,
                    height: 32,
                    left: systemInfo.windowWidth - width - 10,
                    right: systemInfo.windowWidth - 10,
                    top: systemInfo.statusBarHeight + gap,
                    width: width
                };
                console.log("error", error);
                console.log("rect", rect);
            }
            var navBarHeight = "";
            if (!systemInfo.statusBarHeight) {
                systemInfo.statusBarHeight =
                    systemInfo.screenHeight - systemInfo.windowHeight - 20;
                navBarHeight = (function () {
                    var gap = rect.top - systemInfo.statusBarHeight;
                    return 2 * gap + rect.height;
                })();
                systemInfo.statusBarHeight = 0;
                systemInfo.navBarExtendHeight = 0; //下方扩展4像素高度 防止下方边距太小
            }
            else {
                navBarHeight = (function () {
                    var gap = rect.top - systemInfo.statusBarHeight;
                    return systemInfo.statusBarHeight + 2 * gap + rect.height;
                })();
                if (ios) {
                    systemInfo.navBarExtendHeight = 4; //下方扩展4像素高度 防止下方边距太小
                }
                else {
                    systemInfo.navBarExtendHeight = 0;
                }
            }
            var style = {
                color: color,
                boxSizing: "border-box",
                height: +navBarHeight + "px",
                paddingTop: systemInfo.statusBarHeight + "px"
            };
            if (bgColor && !bgImage) {
                style.background = bgColor;
            }
            if (bgImage) {
                style.backgroundImage = "url(" + bgImage + ")";
                style.backgroundSize = "cover";
            }
            return style;
        }, []);
        return (React__default['default'].createElement(components.View, { className: "cu-custom", style: { height: style.height } },
            React__default['default'].createElement(components.View, { className: "cu-bar fixed", style: style },
                React__default['default'].createElement(components.View, { className: "action", onClick: function () { return (isBack ? Taro__default['default'].navigateBack({ delta: 1 }) : void 0); } },
                    isBack && React__default['default'].createElement(components.Text, { className: "cuIcon-back" }),
                    leftSolt),
                React__default['default'].createElement(components.View, { className: "content", style: { top: style.paddingTop } }, children),
                rightSolt)));
    };

    exports.CuAvatar = CuAvatar;
    exports.CuButton = CuButton;
    exports.CuGrid = CuGrid;
    exports.CuIcon = CuIcon;
    exports.CuList = CuList;
    exports.CuModal = CuModal;
    exports.CuNavigation = CuNavigation;
    exports.CuProgress = CuProgress;
    exports.CuSteps = CuSteps;
    exports.CuSwiper = CuSwiper;
    exports.CuSwitch = CuSwitch;
    exports.CuTabs = CuTabs;
    exports.CuTag = CuTag;
    exports.CuTimeline = CuTimeline;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
