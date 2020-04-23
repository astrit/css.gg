"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledLock = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:11px;border:2px solid;border-top-right-radius:50%;border-top-left-radius:50%;border-bottom:transparent;margin-top:-12px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:16px;height:10px;border-radius:2px;border:2px solid transparent;box-shadow:0 0 0 2px;left:-4px;top:9px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:11px;border:2px solid;border-top-right-radius:50%;border-top-left-radius:50%;border-bottom:transparent;margin-top:-12px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:16px;height:10px;border-radius:2px;border:2px solid transparent;box-shadow:0 0 0 2px;left:-4px;top:9px}\n"])));
exports.Lock = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledLock, tslib_1.__assign({}, props, { ref: ref, "icon-role": "lock" }))));
});
var templateObject_1;
//# sourceMappingURL=Lock.js.map