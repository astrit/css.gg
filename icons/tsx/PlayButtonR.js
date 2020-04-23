"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPlayButtonR = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:4px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:0;height:10px;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:6px solid;top:4px;left:7px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:22px;border:2px solid;border-radius:4px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:0;height:10px;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:6px solid;top:4px;left:7px}\n"])));
exports.PlayButtonR = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPlayButtonR, tslib_1.__assign({}, props, { ref: ref, "icon-role": "play-button-r" }))));
});
var templateObject_1;
//# sourceMappingURL=PlayButtonR.js.map