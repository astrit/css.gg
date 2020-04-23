"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledZoomIn = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid;border-radius:100%;background:linear-gradient(to bottom,currentColor 5px,transparent 0)no-repeat 2px 5px/8px 2px;margin-top:-4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:8px;background:currentColor}&::after{transform:rotate(-45deg);border-radius:3px;top:10px;left:12px}&::before{top:2px;left:5px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid;border-radius:100%;background:linear-gradient(to bottom,currentColor 5px,transparent 0)no-repeat 2px 5px/8px 2px;margin-top:-4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:8px;background:currentColor}&::after{transform:rotate(-45deg);border-radius:3px;top:10px;left:12px}&::before{top:2px;left:5px}\n"])));
exports.ZoomIn = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledZoomIn, tslib_1.__assign({}, props, { ref: ref, "icon-role": "zoom-in" }))));
});
var templateObject_1;
//# sourceMappingURL=ZoomIn.js.map