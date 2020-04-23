"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledYoutube = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:10px;box-shadow:0 0 0 2px;border-radius:15px 15px 15px 15px /45px 45px 45px 45px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;left:7px;top:2px;border-left:4px solid currentColor;border-top:3px solid transparent;border-bottom:3px solid transparent}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:10px;box-shadow:0 0 0 2px;border-radius:15px 15px 15px 15px /45px 45px 45px 45px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;left:7px;top:2px;border-left:4px solid currentColor;border-top:3px solid transparent;border-bottom:3px solid transparent}\n"])));
exports.Youtube = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledYoutube, tslib_1.__assign({}, props, { ref: ref, "icon-role": "youtube" }))));
});
var templateObject_1;
//# sourceMappingURL=Youtube.js.map