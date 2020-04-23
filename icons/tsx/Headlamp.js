"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledHeadlamp = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject([""], [""])));
exports.Headlamp = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledHeadlamp, tslib_1.__assign({}, props, { ref: ref, "icon-role": "headlamp" }))));
});
var templateObject_1;
//# sourceMappingURL=Headlamp.js.map