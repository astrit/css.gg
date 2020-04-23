"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledFormatBold = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{transform:scale(var(--ggs,1))}&,&::after{box-sizing:border-box;position:relative;display:block;width:8px;height:8px;border:2px solid;border-top-right-radius:100px;border-bottom-right-radius:100px}&::after{content:\"\";position:absolute;width:10px;left:-2px;top:4px}\n"], ["\n  &{transform:scale(var(--ggs,1))}&,&::after{box-sizing:border-box;position:relative;display:block;width:8px;height:8px;border:2px solid;border-top-right-radius:100px;border-bottom-right-radius:100px}&::after{content:\"\";position:absolute;width:10px;left:-2px;top:4px}\n"])));
exports.FormatBold = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledFormatBold, tslib_1.__assign({}, props, { ref: ref, "icon-role": "format-bold" }))));
});
var templateObject_1;
//# sourceMappingURL=FormatBold.js.map