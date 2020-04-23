"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledSmartphone = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{background:linear-gradient(to left,currentColor 5px,transparent 0)no-repeat 4px 12px/2px 2px;box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:20px;border:2px solid;border-radius:2px;}\n"], ["\n  &{background:linear-gradient(to left,currentColor 5px,transparent 0)no-repeat 4px 12px/2px 2px;box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:20px;border:2px solid;border-radius:2px;}\n"])));
exports.Smartphone = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledSmartphone, tslib_1.__assign({}, props, { ref: ref, "icon-role": "smartphone" }))));
});
var templateObject_1;
//# sourceMappingURL=Smartphone.js.map