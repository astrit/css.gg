"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledBulb = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid;border-bottom-color:transparent;border-radius:100px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{border-top:0;border-bottom-left-radius:18px;border-bottom-right-radius:18px;top:10px;border-bottom:2px solid transparent;box-shadow:0 5px 0 -2px,inset 2px 0 0 0,inset -2px 0 0 0,inset 0 -4px 0 -2px;width:8px;height:8px;left:2px}&::after{width:12px;height:2px;border-left:3px solid;border-right:3px solid;border-radius:2px;bottom:0;left:0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid;border-bottom-color:transparent;border-radius:100px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{border-top:0;border-bottom-left-radius:18px;border-bottom-right-radius:18px;top:10px;border-bottom:2px solid transparent;box-shadow:0 5px 0 -2px,inset 2px 0 0 0,inset -2px 0 0 0,inset 0 -4px 0 -2px;width:8px;height:8px;left:2px}&::after{width:12px;height:2px;border-left:3px solid;border-right:3px solid;border-radius:2px;bottom:0;left:0}\n"])));
exports.Bulb = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledBulb, tslib_1.__assign({}, props, { ref: ref, "icon-role": "bulb" }))));
});
var templateObject_1;
//# sourceMappingURL=Bulb.js.map