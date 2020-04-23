"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPullClear = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:12px;border:2px solid;border-top:0;border-bottom-left-radius:2px;border-bottom-right-radius:2px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:12px;height:2px;bottom:2px;left:2px;background:currentColor;box-shadow:0 -4px 0 0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:12px;border:2px solid;border-top:0;border-bottom-left-radius:2px;border-bottom-right-radius:2px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:12px;height:2px;bottom:2px;left:2px;background:currentColor;box-shadow:0 -4px 0 0}\n"])));
exports.PullClear = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPullClear, tslib_1.__assign({}, props, { ref: ref, "icon-role": "pull-clear" }))));
});
var templateObject_1;
//# sourceMappingURL=PullClear.js.map