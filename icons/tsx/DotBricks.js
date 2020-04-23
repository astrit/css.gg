"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledDotBricks = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject([""], [""])));
exports.DotBricks = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledDotBricks, tslib_1.__assign({}, props, { ref: ref, "icon-role": "dot-bricks" }))));
});
var templateObject_1;
//# sourceMappingURL=DotBricks.js.map