"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledEreader = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:18px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:2px;height:18px;right:9px;top:-2px;background:currentColor}&::after{width:5px;height:2px;box-shadow:0 4px 0,0 8px 0;top:2px;right:2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:24px;height:18px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:2px;height:18px;right:9px;top:-2px;background:currentColor}&::after{width:5px;height:2px;box-shadow:0 4px 0,0 8px 0;top:2px;right:2px}\n"])));
exports.Ereader = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledEreader, tslib_1.__assign({}, props, { ref: ref, "icon-role": "ereader" }))));
});
var templateObject_1;
//# sourceMappingURL=Ereader.js.map