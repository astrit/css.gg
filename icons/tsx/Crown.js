"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledCrown = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:19px;height:12px;border:2px solid;border-top-color:transparent;border-bottom-right-radius:3px;border-bottom-left-radius:3px;padding-top:4px}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box;width:8px;height:8px;border-bottom:2px solid;border-left:2px solid;transform:rotate(-45deg);top:-4px}&::before{border-top-left-radius:2px;left:-1px}&::after{border-bottom-right-radius:2px;right:-1px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:19px;height:12px;border:2px solid;border-top-color:transparent;border-bottom-right-radius:3px;border-bottom-left-radius:3px;padding-top:4px}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box;width:8px;height:8px;border-bottom:2px solid;border-left:2px solid;transform:rotate(-45deg);top:-4px}&::before{border-top-left-radius:2px;left:-1px}&::after{border-bottom-right-radius:2px;right:-1px}\n"])));
exports.Crown = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledCrown, tslib_1.__assign({}, props, { ref: ref, "icon-role": "crown" }))));
});
var templateObject_1;
//# sourceMappingURL=Crown.js.map