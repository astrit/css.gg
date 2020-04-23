"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledWindows = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{transform:scale(var(--ggs,1))}&,&::before{display:block;position:relative;box-sizing:border-box;width:17px;height:15px}&::before{content:\"\";position:absolute;width:7px;height:6px;background:currentColor;box-shadow:8px 0 0,8px 7px 0,0 7px 0;transform:perspective(30px) rotateY(-30deg)}\n"], ["\n  &{transform:scale(var(--ggs,1))}&,&::before{display:block;position:relative;box-sizing:border-box;width:17px;height:15px}&::before{content:\"\";position:absolute;width:7px;height:6px;background:currentColor;box-shadow:8px 0 0,8px 7px 0,0 7px 0;transform:perspective(30px) rotateY(-30deg)}\n"])));
exports.Windows = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledWindows, tslib_1.__assign({}, props, { ref: ref, "icon-role": "windows" }))));
});
var templateObject_1;
//# sourceMappingURL=Windows.js.map