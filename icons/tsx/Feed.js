"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledFeed = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after,&::before{display:block;box-sizing:border-box;background:currentColor;box-shadow:0 10px 0 0}&{margin-left:-8px;margin-top:-8px;position:relative;transform:scale(var(--ggs,1));width:7px;height:7px;border-radius:1px}&::after,&::before{content:\"\";position:absolute;border-radius:3px;width:12px;height:2px;top:1px;left:9px;opacity:.8}&::after{width:8px;top:4px;opacity:.5}\n"], ["\n  &,&::after,&::before{display:block;box-sizing:border-box;background:currentColor;box-shadow:0 10px 0 0}&{margin-left:-8px;margin-top:-8px;position:relative;transform:scale(var(--ggs,1));width:7px;height:7px;border-radius:1px}&::after,&::before{content:\"\";position:absolute;border-radius:3px;width:12px;height:2px;top:1px;left:9px;opacity:.8}&::after{width:8px;top:4px;opacity:.5}\n"])));
exports.Feed = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledFeed, tslib_1.__assign({}, props, { ref: ref, "icon-role": "feed" }))));
});
var templateObject_1;
//# sourceMappingURL=Feed.js.map