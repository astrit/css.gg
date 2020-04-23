"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledOptions = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:2px;box-shadow:-3px 4px 0 0,3px -4px 0 0}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border:2px solid;border-radius:100%}&::before{top:-7px;left:-4px}&::after{bottom:-7px;right:-4px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:2px;box-shadow:-3px 4px 0 0,3px -4px 0 0}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border:2px solid;border-radius:100%}&::before{top:-7px;left:-4px}&::after{bottom:-7px;right:-4px}\n"])));
exports.Options = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledOptions, tslib_1.__assign({}, props, { ref: ref, "icon-role": "options" }))));
});
var templateObject_1;
//# sourceMappingURL=Options.js.map