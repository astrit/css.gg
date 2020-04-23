"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledArrowsResizeV = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  & {\n    box-sizing: border-box;\n    position: relative;\n    display: block;\n    transform: scale(var(--ggs, 1));\n    width: 6px;\n    height: 16px;\n  }\n  &::after,\n  &::before {\n    content: '';\n    display: block;\n    box-sizing: border-box;\n    position: absolute;\n    width: 6px;\n    height: 6px;\n    transform: rotate(-45deg);\n  }\n  &::after {\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    top: 0;\n  }\n  &::before {\n    border-top: 2px solid;\n    border-right: 2px solid;\n    bottom: 0;\n  }\n"], ["\n  & {\n    box-sizing: border-box;\n    position: relative;\n    display: block;\n    transform: scale(var(--ggs, 1));\n    width: 6px;\n    height: 16px;\n  }\n  &::after,\n  &::before {\n    content: '';\n    display: block;\n    box-sizing: border-box;\n    position: absolute;\n    width: 6px;\n    height: 6px;\n    transform: rotate(-45deg);\n  }\n  &::after {\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    top: 0;\n  }\n  &::before {\n    border-top: 2px solid;\n    border-right: 2px solid;\n    bottom: 0;\n  }\n"])));
exports.ArrowsResizeV = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledArrowsResizeV, tslib_1.__assign({}, props, { ref: ref, "icon-role": "arrows-resize-v" }))));
});
var templateObject_1;
//# sourceMappingURL=ArrowsResizeV.js.map