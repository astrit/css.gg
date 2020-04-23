"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledDolby = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after,&::before{display:block;box-sizing:border-box;height:16px;border:4px solid}&{position:relative;transform:scale(var(--ggs,1));width:24px}&::after,&::before{content:\"\";position:absolute;width:14px;top:-4px}&::before{border-top-right-radius:10px;border-bottom-right-radius:10px;left:-4px}&::after{border-top-left-radius:10px;border-bottom-left-radius:10px;right:-4px}\n"], ["\n  &,&::after,&::before{display:block;box-sizing:border-box;height:16px;border:4px solid}&{position:relative;transform:scale(var(--ggs,1));width:24px}&::after,&::before{content:\"\";position:absolute;width:14px;top:-4px}&::before{border-top-right-radius:10px;border-bottom-right-radius:10px;left:-4px}&::after{border-top-left-radius:10px;border-bottom-left-radius:10px;right:-4px}\n"])));
exports.Dolby = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledDolby, tslib_1.__assign({}, props, { ref: ref, "icon-role": "dolby" }))));
});
var templateObject_1;
//# sourceMappingURL=Dolby.js.map