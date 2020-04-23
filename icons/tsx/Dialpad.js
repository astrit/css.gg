"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledDialpad = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{transform:scale(var(--ggs,1));}&,&::before{box-shadow:-5px 0 0,5px 0 0}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;width:3px;height:3px;background:currentColor}&::after,&::before{content:\"\";position:absolute;left:0;}&::before{bottom:5px}&::after{box-shadow:-5px 0 0,5px 0 0,0 5px 0;top:5px}\n"], ["\n  &{transform:scale(var(--ggs,1));}&,&::before{box-shadow:-5px 0 0,5px 0 0}&,&::after,&::before{box-sizing:border-box;position:relative;display:block;width:3px;height:3px;background:currentColor}&::after,&::before{content:\"\";position:absolute;left:0;}&::before{bottom:5px}&::after{box-shadow:-5px 0 0,5px 0 0,0 5px 0;top:5px}\n"])));
exports.Dialpad = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledDialpad, tslib_1.__assign({}, props, { ref: ref, "icon-role": "dialpad" }))));
});
var templateObject_1;
//# sourceMappingURL=Dialpad.js.map