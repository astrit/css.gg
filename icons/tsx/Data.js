"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledData = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{transform:scale(var(--ggs,1))}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;border:2px solid;border-radius:50%;width:14px;height:14px}&::after,&::before{content:\"\";position:absolute;width:6px;height:6px;top:2px;left:2px}&::after{background:linear-gradient( to left,currentColor 8px,transparent 0)no-repeat bottom center/2px 8px;width:22px;height:22px;top:-6px;left:-6px}&,&::after{border-top-color:transparent;border-bottom-color:transparent}\n"], ["\n  &{transform:scale(var(--ggs,1))}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;border:2px solid;border-radius:50%;width:14px;height:14px}&::after,&::before{content:\"\";position:absolute;width:6px;height:6px;top:2px;left:2px}&::after{background:linear-gradient( to left,currentColor 8px,transparent 0)no-repeat bottom center/2px 8px;width:22px;height:22px;top:-6px;left:-6px}&,&::after{border-top-color:transparent;border-bottom-color:transparent}\n"])));
exports.Data = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledData, tslib_1.__assign({}, props, { ref: ref, "icon-role": "data" }))));
});
var templateObject_1;
//# sourceMappingURL=Data.js.map