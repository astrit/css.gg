"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledZoomOut = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid;border-radius:100%;margin-top:-4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;background:currentColor}&::after{transform:rotate(-45deg);border-radius:3px;width:2px;height:8px;top:10px;left:12px}&::before{width:8px;height:2px;top:5px;left:2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid;border-radius:100%;margin-top:-4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;background:currentColor}&::after{transform:rotate(-45deg);border-radius:3px;width:2px;height:8px;top:10px;left:12px}&::before{width:8px;height:2px;top:5px;left:2px}\n"])));
exports.ZoomOut = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledZoomOut, tslib_1.__assign({}, props, { ref: ref, "icon-role": "zoom-out" }))));
});
var templateObject_1;
//# sourceMappingURL=ZoomOut.js.map