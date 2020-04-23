"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledArrowBottomRight = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;width:8px;height:8px;border-bottom:2px solid;transform:scale(var(--ggs,1));border-right:2px solid}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:14px;height:2px;background:currentColor;transform:rotate(45deg);bottom:3px;right:-3px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;width:8px;height:8px;border-bottom:2px solid;transform:scale(var(--ggs,1));border-right:2px solid}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:14px;height:2px;background:currentColor;transform:rotate(45deg);bottom:3px;right:-3px}\n"])));
exports.ArrowBottomRight = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledArrowBottomRight, tslib_1.__assign({}, props, { ref: ref, "icon-role": "arrow-bottom-right" }))));
});
var templateObject_1;
//# sourceMappingURL=ArrowBottomRight.js.map