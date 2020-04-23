"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMagnet = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::before{display:block;box-sizing:border-box;width:14px}&{border:4px solid;transform:scale(var(--ggs,1));border-bottom-left-radius:100px;border-bottom-right-radius:100px;border-top:0;position:relative;height:12px}&::before{content:\"\";position:absolute;height:3px;border-left:4px solid;border-right:4px solid;top:-5px;left:-4px;opacity:.5}\n"], ["\n  &,&::before{display:block;box-sizing:border-box;width:14px}&{border:4px solid;transform:scale(var(--ggs,1));border-bottom-left-radius:100px;border-bottom-right-radius:100px;border-top:0;position:relative;height:12px}&::before{content:\"\";position:absolute;height:3px;border-left:4px solid;border-right:4px solid;top:-5px;left:-4px;opacity:.5}\n"])));
exports.Magnet = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMagnet, tslib_1.__assign({}, props, { ref: ref, "icon-role": "magnet" }))));
});
var templateObject_1;
//# sourceMappingURL=Magnet.js.map