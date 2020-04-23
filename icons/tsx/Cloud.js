"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledCloud = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:8px;height:2px;background:currentColor;margin-bottom:-20px}&::after,&::before{content:\"\";display:block;position:absolute;border:2px solid;box-sizing:border-box;bottom:0}&::before{border-top-left-radius:100px;border-bottom-left-radius:100px;border-right:0;left:-6px;width:7px;height:12px}&::after{width:16px;height:16px;border-radius:100px;border-left-color:transparent;right:-8px;transform:rotate(-45deg)}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:8px;height:2px;background:currentColor;margin-bottom:-20px}&::after,&::before{content:\"\";display:block;position:absolute;border:2px solid;box-sizing:border-box;bottom:0}&::before{border-top-left-radius:100px;border-bottom-left-radius:100px;border-right:0;left:-6px;width:7px;height:12px}&::after{width:16px;height:16px;border-radius:100px;border-left-color:transparent;right:-8px;transform:rotate(-45deg)}\n"])));
exports.Cloud = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledCloud, tslib_1.__assign({}, props, { ref: ref, "icon-role": "cloud" }))));
});
var templateObject_1;
//# sourceMappingURL=Cloud.js.map