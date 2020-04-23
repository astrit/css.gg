"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledLockUnlock = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:6px;border:2px solid;border-top-right-radius:100px;border-top-left-radius:100px;border-bottom:transparent;margin-top:-18px;margin-left:-2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::after{border:2px solid transparent;box-shadow:0 0 0 2px;width:16px;height:10px;border-radius:2px;left:-4px;top:10px}&::before{width:2px;height:6px;background:currentColor;left:-2px;top:4px;}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:6px;border:2px solid;border-top-right-radius:100px;border-top-left-radius:100px;border-bottom:transparent;margin-top:-18px;margin-left:-2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::after{border:2px solid transparent;box-shadow:0 0 0 2px;width:16px;height:10px;border-radius:2px;left:-4px;top:10px}&::before{width:2px;height:6px;background:currentColor;left:-2px;top:4px;}\n"])));
exports.LockUnlock = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledLockUnlock, tslib_1.__assign({}, props, { ref: ref, "icon-role": "lock-unlock" }))));
});
var templateObject_1;
//# sourceMappingURL=LockUnlock.js.map