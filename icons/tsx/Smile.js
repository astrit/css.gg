"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledSmile = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px;border:2px solid;border-radius:100px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;left:4px}&::before{background:currentColor;box-shadow:6px 0 0;width:2px;height:2px;border-radius:50%;top:5px}&::after{width:8px;height:4px;border-radius:150px;border-top-left-radius:0;border-top-right-radius:0;border:2px solid;border-top-color:transparent;top:9px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px;border:2px solid;border-radius:100px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;left:4px}&::before{background:currentColor;box-shadow:6px 0 0;width:2px;height:2px;border-radius:50%;top:5px}&::after{width:8px;height:4px;border-radius:150px;border-top-left-radius:0;border-top-right-radius:0;border:2px solid;border-top-color:transparent;top:9px}\n"])));
exports.Smile = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledSmile, tslib_1.__assign({}, props, { ref: ref, "icon-role": "smile" }))));
});
var templateObject_1;
//# sourceMappingURL=Smile.js.map