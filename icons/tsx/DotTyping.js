"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledDotTyping = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject([""], [""])));
exports.DotTyping = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledDotTyping, tslib_1.__assign({}, props, { ref: ref, "icon-role": "dot-typing" }))));
});
var templateObject_1;
//# sourceMappingURL=DotTyping.js.map