"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledDistributeVertical = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));height:14px;width:14px;border-top:2px solid;border-bottom:2px solid}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;height:4px;width:8px;background:currentColor;right:3px;top:3px;opacity:.5}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));height:14px;width:14px;border-top:2px solid;border-bottom:2px solid}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;height:4px;width:8px;background:currentColor;right:3px;top:3px;opacity:.5}\n"])));
exports.DistributeVertical = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledDistributeVertical, tslib_1.__assign({}, props, { ref: ref, "icon-role": "distribute-vertical" }))));
});
var templateObject_1;
//# sourceMappingURL=DistributeVertical.js.map