"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledCode = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{transform:scale(var(--ggs,1))}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;width:8px;height:20px}&::after,&::before{content:\"\";position:absolute;height:8px;border-left:2px solid;border-bottom:2px solid;transform:rotate(45deg) scaleY(1);left:-4px;top:6px}&::after{transform:rotate(-45deg) scaleX(-1);left:4px}\n"], ["\n  &{transform:scale(var(--ggs,1))}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;width:8px;height:20px}&::after,&::before{content:\"\";position:absolute;height:8px;border-left:2px solid;border-bottom:2px solid;transform:rotate(45deg) scaleY(1);left:-4px;top:6px}&::after{transform:rotate(-45deg) scaleX(-1);left:4px}\n"])));
exports.Code = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledCode, tslib_1.__assign({}, props, { ref: ref, "icon-role": "code" }))));
});
var templateObject_1;
//# sourceMappingURL=Code.js.map