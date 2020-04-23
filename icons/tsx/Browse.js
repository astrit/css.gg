"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledBrowse = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;position:relative;transform:scale(var(--ggs,1));box-sizing:border-box;width:16px;height:22px;border:2px solid;border-radius:3px;background:linear-gradient(to left,currentcolor 10px,transparent 0) no-repeat center 2px/8px 2px,linear-gradient(to left,currentcolor 10px,transparent 0) no-repeat center 6px/8px 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:22px}&::before{width:6px;height:6px;border:2px solid;left:3px;top:9px}&::after{width:2px;height:4px;background:currentColor;bottom:1px;right:2px;transform:rotate(-45deg)}\n"], ["\n  &{display:block;position:relative;transform:scale(var(--ggs,1));box-sizing:border-box;width:16px;height:22px;border:2px solid;border-radius:3px;background:linear-gradient(to left,currentcolor 10px,transparent 0) no-repeat center 2px/8px 2px,linear-gradient(to left,currentcolor 10px,transparent 0) no-repeat center 6px/8px 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:22px}&::before{width:6px;height:6px;border:2px solid;left:3px;top:9px}&::after{width:2px;height:4px;background:currentColor;bottom:1px;right:2px;transform:rotate(-45deg)}\n"])));
exports.Browse = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledBrowse, tslib_1.__assign({}, props, { ref: ref, "icon-role": "browse" }))));
});
var templateObject_1;
//# sourceMappingURL=Browse.js.map