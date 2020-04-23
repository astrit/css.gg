"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledSandClock = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:20px;border-top:2px solid;border-bottom:2px solid}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{border-top-left-radius:14px;border-top-right-radius:14px;bottom:-2px;width:10px;height:10px;border:2px solid;left:1px}&::after{width:6px;height:6px;border:2px solid transparent;border-bottom-left-radius:14px;border-bottom-right-radius:14px;top:0;left:3px;box-shadow:0 0 0 2px,inset 2px 0 0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:20px;border-top:2px solid;border-bottom:2px solid}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{border-top-left-radius:14px;border-top-right-radius:14px;bottom:-2px;width:10px;height:10px;border:2px solid;left:1px}&::after{width:6px;height:6px;border:2px solid transparent;border-bottom-left-radius:14px;border-bottom-right-radius:14px;top:0;left:3px;box-shadow:0 0 0 2px,inset 2px 0 0}\n"])));
exports.SandClock = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledSandClock, tslib_1.__assign({}, props, { ref: ref, "icon-role": "sand-clock" }))));
});
var templateObject_1;
//# sourceMappingURL=SandClock.js.map