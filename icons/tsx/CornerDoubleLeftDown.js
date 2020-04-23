"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledCornerDoubleLeftDown = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:12px;border-top-left-radius:4px;border-top:2px solid;border-left:2px solid}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-right:2px solid;transform:rotate(45deg)}&::after{border-top:2px solid;top:-4px;right:0}&::before{border-bottom:2px solid;left:-4px;bottom:0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:12px;border-top-left-radius:4px;border-top:2px solid;border-left:2px solid}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-right:2px solid;transform:rotate(45deg)}&::after{border-top:2px solid;top:-4px;right:0}&::before{border-bottom:2px solid;left:-4px;bottom:0}\n"])));
exports.CornerDoubleLeftDown = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledCornerDoubleLeftDown, tslib_1.__assign({}, props, { ref: ref, "icon-role": "corner-double-left-down" }))));
});
var templateObject_1;
//# sourceMappingURL=CornerDoubleLeftDown.js.map