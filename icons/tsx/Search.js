"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledSearch = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid;border-radius:100%;margin-left:-4px;margin-top:-4px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:2px;height:8px;background:currentColor;transform:rotate(-45deg);top:10px;left:12px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid;border-radius:100%;margin-left:-4px;margin-top:-4px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:2px;height:8px;background:currentColor;transform:rotate(-45deg);top:10px;left:12px}\n"])));
exports.Search = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledSearch, tslib_1.__assign({}, props, { ref: ref, "icon-role": "search" }))));
});
var templateObject_1;
//# sourceMappingURL=Search.js.map