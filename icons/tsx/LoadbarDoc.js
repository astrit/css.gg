"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledLoadbarDoc = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  @keyframes gg-doc{0%{left:-16px}60%,to{left:0}}&{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));border:2px solid transparent;box-shadow:0 0 0 2px;border-radius:1px;width:12px;height:14px;overflow:hidden}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box;height:2px;background:currentColor;animation:gg-doc 1s linear infinite alternate}&::before{width:14px;box-shadow:-4px 4px 0}&::after{width:5px;top:8px}\n"], ["\n  @keyframes gg-doc{0%{left:-16px}60%,to{left:0}}&{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));border:2px solid transparent;box-shadow:0 0 0 2px;border-radius:1px;width:12px;height:14px;overflow:hidden}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box;height:2px;background:currentColor;animation:gg-doc 1s linear infinite alternate}&::before{width:14px;box-shadow:-4px 4px 0}&::after{width:5px;top:8px}\n"])));
exports.LoadbarDoc = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledLoadbarDoc, tslib_1.__assign({}, props, { ref: ref, "icon-role": "loadbar-doc" }))));
});
var templateObject_1;
//# sourceMappingURL=LoadbarDoc.js.map