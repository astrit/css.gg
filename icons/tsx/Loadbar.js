"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledLoadbar = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  @keyframes loadbar{0%,to{left:0;right:80%}25%,75%{left:0;right:0}50%{left:80%;right:0}}&,&::before{display:block;box-sizing:border-box;height:4px}&{position:relative;transform:scale(var(--ggs,1));width:18px}&::before{content:\"\";position:absolute;border-radius:4px;background:currentColor;animation:loadbar 2s cubic-bezier(0,0,.58,1) infinite}\n"], ["\n  @keyframes loadbar{0%,to{left:0;right:80%}25%,75%{left:0;right:0}50%{left:80%;right:0}}&,&::before{display:block;box-sizing:border-box;height:4px}&{position:relative;transform:scale(var(--ggs,1));width:18px}&::before{content:\"\";position:absolute;border-radius:4px;background:currentColor;animation:loadbar 2s cubic-bezier(0,0,.58,1) infinite}\n"])));
exports.Loadbar = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledLoadbar, tslib_1.__assign({}, props, { ref: ref, "icon-role": "loadbar" }))));
});
var templateObject_1;
//# sourceMappingURL=Loadbar.js.map