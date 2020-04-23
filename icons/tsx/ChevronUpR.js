"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledChevronUpR = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:4px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-top:2px solid;border-right:2px solid;transform:rotate(-45deg);left:6px;bottom:5px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:4px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;border-top:2px solid;border-right:2px solid;transform:rotate(-45deg);left:6px;bottom:5px}\n"])));
exports.ChevronUpR = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledChevronUpR, tslib_1.__assign({}, props, { ref: ref, "icon-role": "chevron-up-r" }))));
});
var templateObject_1;
//# sourceMappingURL=ChevronUpR.js.map