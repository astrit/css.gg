"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledOculus = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:20px;height:12px;border:4px solid;border-radius:22px;}\n"], ["\n  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:20px;height:12px;border:4px solid;border-radius:22px;}\n"])));
exports.Oculus = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledOculus, tslib_1.__assign({}, props, { ref: ref, "icon-role": "oculus" }))));
});
var templateObject_1;
//# sourceMappingURL=Oculus.js.map