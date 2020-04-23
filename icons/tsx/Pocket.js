"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPocket = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:20px;border:2px solid;border-radius:6px;border-bottom-left-radius:22px;border-bottom-right-radius:22px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:22px;width:8px;height:2px;background:currentColor;bottom:7px}&::before{transform:rotate(-48deg);right:3px}&::after{transform:rotate(48deg);left:3px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:20px;border:2px solid;border-radius:6px;border-bottom-left-radius:22px;border-bottom-right-radius:22px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:22px;width:8px;height:2px;background:currentColor;bottom:7px}&::before{transform:rotate(-48deg);right:3px}&::after{transform:rotate(48deg);left:3px}\n"])));
exports.Pocket = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPocket, tslib_1.__assign({}, props, { ref: ref, "icon-role": "pocket" }))));
});
var templateObject_1;
//# sourceMappingURL=Pocket.js.map