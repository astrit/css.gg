"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledArrowsScrollV = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:6px;height:16px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;transform:rotate(-45deg)}&::after{border-bottom:2px solid;border-left:2px solid}&::before{border-top:2px solid;border-right:2px solid;bottom:0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:6px;height:16px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;transform:rotate(-45deg)}&::after{border-bottom:2px solid;border-left:2px solid}&::before{border-top:2px solid;border-right:2px solid;bottom:0}\n"])));
exports.ArrowsScrollV = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledArrowsScrollV, tslib_1.__assign({}, props, { ref: ref, "icon-role": "arrows-scroll-v" }))));
});
var templateObject_1;
//# sourceMappingURL=ArrowsScrollV.js.map