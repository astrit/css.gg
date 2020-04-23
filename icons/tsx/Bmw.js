"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledBmw = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{position:relative;box-sizing:border-box;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:18px}&::before{content:\"\";position:absolute;box-sizing:border-box;display:block;border:9px solid;border-top-color:transparent;border-bottom-color:transparent;border-radius:18px;transform:rotate(45deg);left:-2px;top:-2px}\n"], ["\n  &{position:relative;box-sizing:border-box;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:18px}&::before{content:\"\";position:absolute;box-sizing:border-box;display:block;border:9px solid;border-top-color:transparent;border-bottom-color:transparent;border-radius:18px;transform:rotate(45deg);left:-2px;top:-2px}\n"])));
exports.Bmw = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledBmw, tslib_1.__assign({}, props, { ref: ref, "icon-role": "bmw" }))));
});
var templateObject_1;
//# sourceMappingURL=Bmw.js.map