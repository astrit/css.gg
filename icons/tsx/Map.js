"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMap = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject([""], [""])));
exports.Map = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMap, tslib_1.__assign({}, props, { ref: ref, "icon-role": "map" }))));
});
var templateObject_1;
//# sourceMappingURL=Map.js.map