"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledComedyCentral = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::before{box-sizing:border-box;display:block;border:3px solid;border-radius:100px}&{position:relative;border-left-color:transparent;transform:scale(var(--ggs,1));width:20px;height:20px}&::before{content:\"\";position:absolute;border-right-color:transparent;width:10px;height:10px;bottom:2px;right:2px}\n"], ["\n  &,&::before{box-sizing:border-box;display:block;border:3px solid;border-radius:100px}&{position:relative;border-left-color:transparent;transform:scale(var(--ggs,1));width:20px;height:20px}&::before{content:\"\";position:absolute;border-right-color:transparent;width:10px;height:10px;bottom:2px;right:2px}\n"])));
exports.ComedyCentral = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledComedyCentral, tslib_1.__assign({}, props, { ref: ref, "icon-role": "comedy-central" }))));
});
var templateObject_1;
//# sourceMappingURL=ComedyCentral.js.map