"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPinBottom = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:8px;background:currentColor}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::after{background:currentColor;bottom:-2px;border-radius:3px;width:10px;height:2px;left:-4px}&::before{width:8px;height:8px;border:6px double;border-radius:100px;top:-10px;left:-5px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:2px;height:8px;background:currentColor}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::after{background:currentColor;bottom:-2px;border-radius:3px;width:10px;height:2px;left:-4px}&::before{width:8px;height:8px;border:6px double;border-radius:100px;top:-10px;left:-5px}\n"])));
exports.PinBottom = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPinBottom, tslib_1.__assign({}, props, { ref: ref, "icon-role": "pin-bottom" }))));
});
var templateObject_1;
//# sourceMappingURL=PinBottom.js.map