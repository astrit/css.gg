"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledOpenCollective = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::before{display:block;box-sizing:border-box;border-radius:22px}&{position:relative;transform:scale(var(--ggs,1));width:18px;height:18px;border:3px solid;border-right-color:transparent}&::before{content:\"\";position:absolute;width:14px;height:14px;border:3px solid transparent;border-right:3px solid;top:-1px;right:-3px;opacity:.5}\n"], ["\n  &,&::before{display:block;box-sizing:border-box;border-radius:22px}&{position:relative;transform:scale(var(--ggs,1));width:18px;height:18px;border:3px solid;border-right-color:transparent}&::before{content:\"\";position:absolute;width:14px;height:14px;border:3px solid transparent;border-right:3px solid;top:-1px;right:-3px;opacity:.5}\n"])));
exports.OpenCollective = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledOpenCollective, tslib_1.__assign({}, props, { ref: ref, "icon-role": "open-collective" }))));
});
var templateObject_1;
//# sourceMappingURL=OpenCollective.js.map