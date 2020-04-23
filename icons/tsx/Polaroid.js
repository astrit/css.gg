"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPolaroid = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:20px;border:2px solid;border-radius:2px;box-shadow:inset 0 -5px 0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:20px;border:2px solid;border-radius:2px;box-shadow:inset 0 -5px 0}\n"])));
exports.Polaroid = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPolaroid, tslib_1.__assign({}, props, { ref: ref, "icon-role": "polaroid" }))));
});
var templateObject_1;
//# sourceMappingURL=Polaroid.js.map