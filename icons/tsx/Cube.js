"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledCube = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  & {\n    box-sizing: border-box;\n    position: relative;\n    display: block;\n    width: 18px;\n    height: 18px;\n    transform: scale(var(--ggs, 1));\n    background-color: red;\n  }\n"], ["\n  & {\n    box-sizing: border-box;\n    position: relative;\n    display: block;\n    width: 18px;\n    height: 18px;\n    transform: scale(var(--ggs, 1));\n    background-color: red;\n  }\n"])));
exports.Cube = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledCube, tslib_1.__assign({}, props, { ref: ref, "icon-role": "cube" }))));
});
var templateObject_1;
//# sourceMappingURL=Cube.js.map