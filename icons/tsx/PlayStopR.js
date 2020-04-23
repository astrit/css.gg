"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPlayStopR = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:4px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;top:6px;left:6px;background:currentColor}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:4px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;top:6px;left:6px;background:currentColor}\n"])));
exports.PlayStopR = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPlayStopR, tslib_1.__assign({}, props, { ref: ref, "icon-role": "play-stop-r" }))));
});
var templateObject_1;
//# sourceMappingURL=PlayStopR.js.map